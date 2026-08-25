const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const TERRACOTA = '#B5511F';

async function icon(size) {
  const r = Math.round(size * 0.22);
  const bg = Buffer.from(
    `<svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
       <path d="M ${r} 0 H ${size} V ${size - r} A ${r} ${r} 0 0 1 ${size - r} ${size} H 0 V ${r} A ${r} ${r} 0 0 1 ${r} 0 Z" fill="${TERRACOTA}"/>
     </svg>`
  );
  const glyph = await sharp(path.join(ROOT, 'public/images/05b.png'))
    .resize({ width: Math.round(size * 0.74), fit: 'inside' })
    .toBuffer();
  const gm = await sharp(glyph).metadata();
  return sharp(bg)
    .composite([{ input: glyph, left: Math.round((size - gm.width) / 2), top: Math.round((size - gm.height) / 2) }])
    .png()
    .toBuffer();
}

// ICO com payload PNG (suportado por todos os navegadores modernos)
function pngToIco(png, size) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); header.writeUInt16LE(1, 2); header.writeUInt16LE(1, 4);
  const dir = Buffer.alloc(16);
  dir.writeUInt8(size >= 256 ? 0 : size, 0);
  dir.writeUInt8(size >= 256 ? 0 : size, 1);
  dir.writeUInt8(0, 2); dir.writeUInt8(0, 3);
  dir.writeUInt16LE(1, 4); dir.writeUInt16LE(32, 6);
  dir.writeUInt32LE(png.length, 8); dir.writeUInt32LE(22, 12);
  return Buffer.concat([header, dir, png]);
}

async function fade(buf, alpha) {
  const m = await sharp(buf).metadata();
  return sharp(buf)
    .composite([{
      input: { create: { width: m.width, height: m.height, channels: 4, background: { r: 255, g: 255, b: 255, alpha } } },
      blend: 'dest-in',
    }])
    .png()
    .toBuffer();
}

async function ogImage() {
  const W = 1200, H = 630;
  const bg = Buffer.from(
    `<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
       <defs>
         <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
           <stop offset="0%" stop-color="#B5511F"/>
           <stop offset="100%" stop-color="#9A4419"/>
         </linearGradient>
       </defs>
       <rect width="${W}" height="${H}" fill="url(#g)"/>
       <rect x="0" y="${H - 14}" width="${W}" height="14" fill="#30605D"/>
     </svg>`
  );

  const wmBase = await sharp(path.join(ROOT, 'public/images/05b.png'))
    .resize({ width: 700, fit: 'inside' })
    .toBuffer();
  const wm = await sharp(wmBase).metadata();
  const watermark = await fade(wmBase, 0.1);

  const logo = await sharp(path.join(ROOT, 'public/images/01-branco.png'))
    .resize({ width: 600, fit: 'inside' })
    .toBuffer();
  const lm = await sharp(logo).metadata();

  const text = Buffer.from(
    `<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
       <text x="90" y="392" font-family="Georgia, 'Times New Roman', serif" font-size="46" font-style="italic" fill="#ffffff">A resposta que você precisa</text>
       <text x="90" y="454" font-family="Georgia, 'Times New Roman', serif" font-size="46" font-style="italic" fill="#E0CDBA">no tempo que você merece</text>
       <text x="90" y="540" font-family="Segoe UI, Arial, sans-serif" font-size="24" letter-spacing="2" fill="#ffffff" fill-opacity="0.85">PATOLOGIA E CITOPATOLOGIA · CIANORTE-PR</text>
     </svg>`
  );

  await sharp(bg)
    .composite([
      { input: watermark, left: W - Math.round(wm.width * 0.6), top: Math.round((H - wm.height) / 2) },
      { input: logo, left: 90, top: 200 - Math.round(lm.height / 2) },
      { input: text, left: 0, top: 0 },
    ])
    .jpeg({ quality: 90 })
    .toFile(path.join(ROOT, 'public/og-image.jpg'));
}

(async () => {
  fs.writeFileSync(path.join(ROOT, 'public/favicon-16x16.png'), await icon(16));
  fs.writeFileSync(path.join(ROOT, 'public/favicon-32x32.png'), await icon(32));
  fs.writeFileSync(path.join(ROOT, 'public/favicon-192x192.png'), await icon(192));
  fs.writeFileSync(path.join(ROOT, 'public/favicon-512x512.png'), await icon(512));
  fs.writeFileSync(path.join(ROOT, 'public/apple-icon.png'), await icon(180));
  const ico = pngToIco(await icon(32), 32);
  fs.writeFileSync(path.join(ROOT, 'app/favicon.ico'), ico);
  await ogImage();
  console.log('assets gerados');
})();
