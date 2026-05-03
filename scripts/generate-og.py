#!/usr/bin/env python3
"""
Genera la imagen Open Graph (1200×627) para que LinkedIn / WhatsApp / Twitter
muestren preview cuando se comparta el enlace de PMOforge. Se guarda en public/og.png.

Uso:
    python3 scripts/generate-og.py
"""
from PIL import Image, ImageDraw, ImageFont
from pathlib import Path

W, H = 1200, 627

# Paleta consistente con la landing (Tailwind config)
INK_900 = (11, 21, 37)
INK_700 = (36, 48, 68)
INK_500 = (86, 101, 122)
INK_100 = (232, 237, 243)
ACCENT = (255, 122, 26)         # ember-500
ACCENT_LIGHT = (255, 201, 122)  # ember-200
ACCENT_PALE = (255, 246, 229)   # ember-50
WHITE = (255, 255, 255)

F_SERIF_BOLD = "/usr/share/fonts/truetype/dejavu/DejaVuSerif-Bold.ttf"
F_SANS_BOLD = "/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf"
F_SANS_REG = "/usr/share/fonts/truetype/liberation/LiberationSans-Regular.ttf"


def font(path, size):
    return ImageFont.truetype(path, size)


def draw_layer_box(d, x, y, w, h, label, color):
    """Marco de capa estilo SVG dashed."""
    # Borde dashed simulado con segmentos
    dash_len = 5
    gap = 4
    # Top
    cx = x
    while cx < x + w:
        d.line([(cx, y), (min(cx + dash_len, x + w), y)], fill=color, width=2)
        cx += dash_len + gap
    # Bottom
    cx = x
    while cx < x + w:
        d.line([(cx, y + h), (min(cx + dash_len, x + w), y + h)], fill=color, width=2)
        cx += dash_len + gap
    # Left & right
    cy = y
    while cy < y + h:
        d.line([(x, cy), (x, min(cy + dash_len, y + h))], fill=color, width=2)
        d.line([(x + w, cy), (x + w, min(cy + dash_len, y + h))], fill=color, width=2)
        cy += dash_len + gap
    # Etiqueta
    d.text((x + 14, y + 8), label, font=font(F_SANS_BOLD, 13), fill=color)


def make_image(out_path: Path):
    img = Image.new("RGB", (W, H), INK_900)
    d = ImageDraw.Draw(img)

    # Fondo gradiente
    for y in range(H):
        t = y / H
        r = int(INK_900[0] + (INK_700[0] - INK_900[0]) * t * 0.4)
        g = int(INK_900[1] + (INK_700[1] - INK_900[1]) * t * 0.4)
        b = int(INK_900[2] + (INK_700[2] - INK_900[2]) * t * 0.4)
        d.line([(0, y), (W, y)], fill=(r, g, b))

    # Decoración: diagonal acento esquina superior derecha
    d.polygon([(W - 280, 0), (W, 0), (W, 280)], fill=ACCENT)
    d.polygon([(W - 200, 0), (W, 0), (W, 200)], fill=ACCENT_LIGHT)

    # ===== Lado izquierdo: identidad =====
    # Logo iconográfico (cuadrado con martillo/forja)
    icon_x, icon_y, icon_size = 80, 70, 56
    d.rounded_rectangle([(icon_x, icon_y), (icon_x + icon_size, icon_y + icon_size)],
                        radius=12, fill=ACCENT)
    d.text((icon_x + 14, icon_y + 6), "⚒", font=font(F_SERIF_BOLD, 38), fill=WHITE)

    # Marca
    d.text((icon_x + icon_size + 18, 78), "PMOforge",
           font=font(F_SANS_BOLD, 44), fill=WHITE)

    # Headline (serif)
    d.text((80, 180), "Forja tu PMO con",
           font=font(F_SERIF_BOLD, 54), fill=WHITE)
    d.text((80, 244), "agentes IA que",
           font=font(F_SERIF_BOLD, 54), fill=WHITE)
    d.text((80, 308), "sí ejecutan",
           font=font(F_SERIF_BOLD, 54), fill=ACCENT_LIGHT)

    # Línea acento
    d.rectangle([(80, 380), (200, 388)], fill=ACCENT)

    # Subtitle / sectores
    d.text((80, 410),
           "Agentes jerárquicos sobre OpenClaw  ·  PMI / SAFe",
           font=font(F_SANS_REG, 22), fill=INK_100)

    # CTA / etiqueta inferior
    d.text((80, H - 110), "ACCESO ANTICIPADO",
           font=font(F_SANS_BOLD, 14), fill=ACCENT)
    d.text((80, H - 80), "pmoforge-landing.vercel.app",
           font=font(F_SANS_BOLD, 26), fill=WHITE)

    # ===== Lado derecho: mini-jerarquía =====
    base_x = 720
    base_y = 130

    # Capa 1 — Mando
    draw_layer_box(d, base_x, base_y, 380, 90, "MANDO", INK_500)
    d.ellipse([(base_x + 160, base_y + 18), (base_x + 220, base_y + 78)], fill=ACCENT)
    d.text((base_x + 175, base_y + 32), "PMP",
           font=font(F_SANS_BOLD, 18), fill=WHITE)

    # Conector
    d.line([(base_x + 190, base_y + 90), (base_x + 190, base_y + 110)],
           fill=(204, 213, 224), width=2)

    # Capa 2 — Supervisión
    draw_layer_box(d, base_x, base_y + 110, 380, 80, "SUPERVISIÓN", ACCENT_LIGHT)
    d.rounded_rectangle(
        [(base_x + 130, base_y + 140), (base_x + 250, base_y + 180)],
        radius=8, fill=INK_700
    )
    d.text((base_x + 152, base_y + 150), "Supervisor",
           font=font(F_SANS_BOLD, 14), fill=ACCENT_LIGHT)

    # Conectores
    for tx in [base_x + 30, base_x + 130, base_x + 250, base_x + 350]:
        d.line([(base_x + 190, base_y + 180), (tx, base_y + 230)],
               fill=(204, 213, 224), width=1)

    # Capa 3 — Operativos
    draw_layer_box(d, base_x, base_y + 215, 380, 110, "OPERATIVOS", INK_500)
    agents = [("RAID", base_x + 30), ("Status", base_x + 130),
              ("Minuta", base_x + 250), ("Deps", base_x + 350)]
    for label, ax in agents:
        d.ellipse([(ax - 24, base_y + 252), (ax + 24, base_y + 300)],
                  outline=ACCENT, width=2, fill=WHITE)
        bbox = d.textbbox((0, 0), label, font=font(F_SANS_BOLD, 12))
        tw = bbox[2] - bbox[0]
        d.text((ax - tw / 2, base_y + 270), label,
               font=font(F_SANS_BOLD, 12), fill=INK_900)

    # Línea inferior decorativa
    d.line([(80, H - 30), (W - 80, H - 30)], fill=ACCENT, width=3)

    out_path.parent.mkdir(parents=True, exist_ok=True)
    img.save(out_path, "PNG", optimize=True)
    print(f"OK  {out_path}  ({out_path.stat().st_size // 1024} KB)")


if __name__ == "__main__":
    here = Path(__file__).resolve().parent.parent
    out = here / "public" / "og.png"
    make_image(out)
