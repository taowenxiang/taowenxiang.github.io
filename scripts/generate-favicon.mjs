import sharp from "sharp";
import pngToIco from "png-to-ico";
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const svgPath = join(root, "public", "logo.svg");
const svg = readFileSync(svgPath);

const png32 = await sharp(svg).resize(32, 32).png().toBuffer();
const png48 = await sharp(svg).resize(48, 48).png().toBuffer();
writeFileSync(join(root, "public", "favicon-32x32.png"), png32);
writeFileSync(join(root, "public", "favicon-48x48.png"), png48);
const ico = await pngToIco([png32, png48]);
writeFileSync(join(root, "public", "favicon.ico"), ico);
console.log("Wrote public/favicon-32x32.png, favicon-48x48.png, favicon.ico");
