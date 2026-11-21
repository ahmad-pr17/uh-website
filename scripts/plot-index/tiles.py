import math, os, sys, urllib.request, concurrent.futures as cf
from PIL import Image
OUT = sys.argv[1]; Z = int(sys.argv[2])
S, W, N, E = 31.42704072, 74.23669041, 31.4460537, 74.25075721
URL = "https://maps-cdn.bahriaplus.com/global/lahore/union-town-122025/{z}/{x}/{y}.png"
def tx(lng, z): return (lng + 180) / 360 * 2**z
def ty(lat, z): return (1 - math.asinh(math.tan(math.radians(lat))) / math.pi) / 2 * 2**z
x0, x1 = int(tx(W, Z)), int(tx(E, Z)); y0, y1 = int(ty(N, Z)), int(ty(S, Z))
os.makedirs(f"{OUT}/{Z}", exist_ok=True)
def get(xy):
    x, y = xy; p = f"{OUT}/{Z}/{x}_{y}.png"
    if os.path.exists(p): return
    for _ in range(3):
        try:
            d = urllib.request.urlopen(urllib.request.Request(URL.format(z=Z, x=x, y=y), headers={"User-Agent": "Mozilla/5.0"}), timeout=20).read()
            open(p, "wb").write(d); return
        except Exception as e:
            if getattr(e, "code", 0) in (403, 404): open(p, "wb").close(); return
jobs = [(x, y) for x in range(x0, x1 + 1) for y in range(y0, y1 + 1)]
print("tiles", len(jobs), x0, x1, y0, y1, flush=True)
with cf.ThreadPoolExecutor(6) as ex: list(ex.map(get, jobs))
if len(sys.argv) > 3:  # stitch
    img = Image.new("RGB", ((x1 - x0 + 1) * 256, (y1 - y0 + 1) * 256), "white")
    for x, y in jobs:
        p = f"{OUT}/{Z}/{x}_{y}.png"
        if os.path.getsize(p): t = Image.open(p).convert("RGBA"); img.paste(t, ((x - x0) * 256, (y - y0) * 256), t)
    img.save(sys.argv[3])
