# Plot index

Builds `src/data/unionTownPlots.json`, which powers "Find a Plot" on the Maps page.
Plot numbers are read off the society map tiles with OCR, so expect a few misses.

```bash
pip install rapidocr-onnxruntime pillow numpy
python tiles.py tiles 19                     # download zoom-19 map tiles
python ocr.py tiles dets.json                # read plot numbers (slow: ~30-60 min)
python build.py dets.json ../../src/data/unionTownPlots.json
```

Block names come from hand-drawn rules in `block_of()` in `build.py`; adjust them if a block is tagged wrong.
