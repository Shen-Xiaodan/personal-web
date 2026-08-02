from pathlib import Path
from PIL import Image, ImageOps


ROOT = Path(__file__).resolve().parents[1]
OUTPUT_ROOT = ROOT / "src" / "photos" / "travel"
COUNTRIES = ("italy", "netherland", "warsaw")
SIZES = {
    "thumbs": (900, 72),
    "previews": (2400, 84),
}


def convert(source: Path, destination: Path, max_edge: int, quality: int) -> None:
    destination.parent.mkdir(parents=True, exist_ok=True)
    with Image.open(source) as opened:
        image = ImageOps.exif_transpose(opened).convert("RGB")
        image.thumbnail((max_edge, max_edge), Image.Resampling.LANCZOS)
        image.save(destination, "WEBP", quality=quality, method=6)


for country in COUNTRIES:
    sources = sorted(
        path
        for path in (ROOT / country).iterdir()
        if path.suffix.lower() in {".jpg", ".jpeg"}
    )
    for source in sources:
        for variant, (max_edge, quality) in SIZES.items():
            output = OUTPUT_ROOT / variant / country / f"{source.stem}.webp"
            convert(source, output, max_edge, quality)

print("Generated WebP travel images in", OUTPUT_ROOT)
