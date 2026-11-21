"""Cluster raw OCR detections into one entry per plot, tag block + type, write the site's plot index."""
import json, math, sys
from collections import defaultdict

raw = json.load(open(sys.argv[1])); OUT = sys.argv[2]
X0, Y0, Z = raw["x0"], raw["y0"], raw["z"]
BLOCKS = ["Block A", "Block B", "Block C", "Block D", "Executive Block", "Union IT Park", "North area", "Central area"]

def to_latlng(px, py):
    n = 2 ** Z
    lng = (X0 + px / 256) / n * 360 - 180
    lat = math.degrees(math.atan(math.sinh(math.pi * (1 - 2 * (Y0 + py / 256) / n))))
    return round(lat, 6), round(lng, 6)

def side(p, a, b):  # >0 when p is right of a->b in screen coords
    return (b[0] - a[0]) * (p[1] - a[1]) - (b[1] - a[1]) * (p[0] - a[0])

def block_of(px, py):
    # regions drawn by eye on the zoom-17 overview; x/y are zoom-17 pixels of the stitched overview
    x, y = (px + 768) / 4, (py + 512) / 4
    if y < 470 and x > 900: return "Union IT Park"
    if x > 980 and y > 1880: return "Executive Block"
    if y < 1270 and x > 900 and side((x, y), (1240, 640), (930, 1180)) < 0: return "Block D"
    if x < 620 and y > 1700: return "Block A"
    if y >= 1440 and x < 740: return "Block C" if y < 1640 else "Block A"
    if y >= 1440: return "Block B"
    if y >= 1130 and x < 870: return "Central area"
    return "North area"

def kind_of(c):
    r, g, b = c
    return 1 if b > r + 10 else 0  # blue/cyan fills are commercial, peach/yellow/grey residential

# greedy clustering: detections of the same plot (different angles/chunks) land within a few px
dets = sorted(raw["dets"], key=lambda d: -d["s"])
clusters = []
grid = defaultdict(list)
R = 7
for d in dets:
    r, g, b = d["c"]
    # watermark logos ("ioi") read as "000"; plot numbers never start with 0. Blank paper / grey watermark has equal RGB.
    if d["s"] < 0.6 or d["t"].startswith("0") or min(r, g, b) > 235 or max(r, g, b) - min(r, g, b) < 6: continue
    gx, gy = int(d["x"] // R), int(d["y"] // R)
    best = None
    for ix in (gx - 1, gx, gx + 1):
        for iy in (gy - 1, gy, gy + 1):
            for c in grid[(ix, iy)]:
                if math.hypot(c["x"] - d["x"], c["y"] - d["y"]) <= R: best = c; break
    if best is None:
        best = {"x": d["x"], "y": d["y"], "votes": defaultdict(float), "c": d["c"]}
        clusters.append(best); grid[(gx, gy)].append(best)
    best["votes"][d["t"]] += d["s"]

plots = []
for c in clusters:
    text, score = max(c["votes"].items(), key=lambda kv: kv[1])
    if score < 0.8 and len(c["votes"]) > 1: continue  # weak and contested: skip rather than guess
    lat, lng = to_latlng(c["x"], c["y"])
    plots.append([text, BLOCKS.index(block_of(c["x"], c["y"])), kind_of(c["c"]), lat, lng])

# a plot number should appear once per block+type; keep the strongest if OCR doubled it up
seen = {}
for p in plots:
    k = (p[0], p[1], p[2])
    seen.setdefault(k, []).append(p)
dupes = sum(len(v) > 1 for v in seen.values())
plots.sort(key=lambda p: (p[1], p[2], int("".join(ch for ch in p[0] if ch.isdigit()) or 0), p[0]))
json.dump({"blocks": BLOCKS, "plots": plots}, open(OUT, "w"), separators=(",", ":"))
by = defaultdict(int)
for p in plots: by[(BLOCKS[p[1]], "com" if p[2] else "res")] += 1
print("plots", len(plots), "same-number-same-block", dupes); [print(k, v) for k, v in sorted(by.items())]
