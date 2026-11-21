"""OCR plot numbers off the zoom-19 tiles at several rotations (labels follow the streets).
Writes raw detections (text, global px/py at z19, score, background colour) to JSON."""
import glob, json, math, os, re, sys
from multiprocessing import Pool
import numpy as np
from PIL import Image

TILES, OUT = sys.argv[1], sys.argv[2]
Z, CH, STRIDE, UP = 19, 4, 3, 2
ANGLES = (0, 20, 40, 60, 90, -20, -40, -60)
NUM = re.compile(r"\d{1,4}[A-Z]?")
files = {tuple(map(int, os.path.basename(p)[:-4].split("_"))): p for p in glob.glob(f"{TILES}/{Z}/*.png") if os.path.getsize(p)}
xs = sorted({x for x, _ in files}); ys = sorted({y for _, y in files})
X0, Y0 = xs[0], ys[0]
_ocr = None

def chunk_img(cx, cy):
    present = [(x, y) for x in range(cx, cx + CH) for y in range(cy, cy + CH) if (x, y) in files]
    if not present: return None
    img = Image.new("RGB", (CH * 256, CH * 256), "white")
    for x, y in present:
        t = Image.open(files[(x, y)]).convert("RGBA"); img.paste(t, ((x - cx) * 256, (y - cy) * 256), t)
    return img

def bg_colour(img, x, y, r=6):
    a = np.array(img.crop((int(x) - r, int(y) - r, int(x) + r, int(y) + r))).reshape(-1, 3)
    a = a[a.sum(1) > 300]  # drop the dark text strokes
    return [int(v) for v in np.median(a, 0)] if len(a) else [0, 0, 0]

def work(c):
    global _ocr
    if _ocr is None:
        from rapidocr_onnxruntime import RapidOCR
        _ocr = RapidOCR()
    cx, cy = c
    img = chunk_img(cx, cy)
    if img is None: return []
    big = img.resize((img.width * UP, img.height * UP), Image.LANCZOS)
    W, H = big.size; out = []
    for ang in ANGLES:
        r = big.rotate(ang, expand=True, fillcolor="white")
        res, _ = _ocr(np.array(r))
        th = math.radians(ang)
        for box, text, score in res or []:
            text = text.strip().upper().replace(" ", "")
            if not NUM.fullmatch(text): continue
            b = np.array(box)
            u, v = b[:, 0].mean() - r.width / 2, b[:, 1].mean() - r.height / 2
            # undo PIL's counter-clockwise rotation (y axis points down)
            x = u * math.cos(th) - v * math.sin(th) + W / 2
            y = u * math.sin(th) + v * math.cos(th) + H / 2
            x, y = x / UP, y / UP
            if not (0 <= x < img.width and 0 <= y < img.height): continue
            out.append({"t": text, "x": round((cx - X0) * 256 + x, 1), "y": round((cy - Y0) * 256 + y, 1),
                        "s": round(float(score), 3), "a": ang, "c": bg_colour(img, x, y)})
    return out

if __name__ == "__main__":
    chunks = [(cx, cy) for cx in range(xs[0], xs[-1] + 1, STRIDE) for cy in range(ys[0], ys[-1] + 1, STRIDE)]
    dets = []
    with Pool(4) as p:
        for i, d in enumerate(p.imap_unordered(work, chunks)):
            dets += d
            print(f"{i + 1}/{len(chunks)} dets={len(dets)}", flush=True)
    json.dump({"x0": X0, "y0": Y0, "z": Z, "dets": dets}, open(OUT, "w"))
    print("done", len(dets))
