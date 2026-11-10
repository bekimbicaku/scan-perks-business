/**
 * Draw public/og/*.png from src/data/site-facts.ts.
 * Run: node --experimental-strip-types scripts/render-og-images.mjs
 */
import { spawnSync } from 'node:child_process';
import { phrases, siteFacts } from '../src/data/site-facts.ts';

const p = phrases.en;
const kinds = {
  home: [p.rangePerMonth, `${p.trial}, ${p.noCard}`],
  pricing: [`Starter ${p.starterPerMonth}`, p.scans, `Growth ${p.growthPerMonth}`, p.unlimitedScans],
  features: [p.stampLine],
  how: [p.trial, p.noCard, `${siteFacts.scansPerCustomerPerVenuePerDay} scan per customer per venue per day`],
  blog: [p.orMonth, `${p.trial}, ${p.noCard}`],
  faq: [`${p.trial}, ${p.noCard}`, p.scansUpToCap],
  about: [p.forOneVenue, `${p.trial}, ${p.noCard}`],
  contact: [p.trial, p.noCardCap],
  product: [p.starterPerMonth, p.scans, p.trial],
};

const py = `
import json, sys
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

data = json.load(sys.stdin)
W, H = 1200, 630
bold = ImageFont.truetype("/usr/share/fonts/truetype/macos/Inter-Bold.ttf", 64)
semi = ImageFont.truetype("/usr/share/fonts/truetype/macos/Inter-SemiBold.ttf", 40)
body = ImageFont.truetype("/usr/share/fonts/truetype/macos/Inter-Medium.ttf", 32)
out = Path("public/og")
out.mkdir(parents=True, exist_ok=True)

def wrap(draw, text, font, width):
    lines, cur = [], ""
    for word in text.split():
        trial = (cur + " " + word).strip()
        if draw.textlength(trial, font=font) <= width:
            cur = trial
        else:
            if cur:
                lines.append(cur)
            cur = word
    if cur:
        lines.append(cur)
    return lines

for kind, lines in data.items():
    im = Image.new("RGB", (W, H), "#07111f")
    d = ImageDraw.Draw(im)
    d.rectangle((0, 0, 14, H), fill="#22d3ee")
    d.text((64, 78), "Scan Perks", font=bold, fill="#22d3ee")
    y = 200
    for i, line in enumerate(lines):
        font = semi if i == 0 else body
        color = "#f8fafc" if i == 0 else "#cbd5e1"
        for wrapped in wrap(d, line, font, W - 140):
            d.text((64, y), wrapped, font=font, fill=color)
            y += 52
        y += 8
    im.save(out / f"{kind}.png", "PNG")
    print(kind, im.size)
`;

const result = spawnSync('python3', ['-c', py], {
  input: JSON.stringify(kinds),
  encoding: 'utf8',
});
if (result.status !== 0) {
  console.error(result.stderr);
  process.exit(result.status ?? 1);
}
process.stdout.write(result.stdout);
