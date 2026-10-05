const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const ARTIFACTS_DIR = 'C:\\Users\\Asus\\.gemini\\antigravity-ide\\brain\\f7ac385c-1559-4882-a419-2155fabbff8d';
const TARGET_DIR = path.resolve(__dirname, '..', 'public', 'assets', 'images', 'rooms');

const imageMap = [
  { prefix: 'rooms_hero_cottages', name: 'rooms-hero-cottages', maxW: 1920, quality: 85 },
  { prefix: 'rooms_luxury_interior', name: 'rooms-luxury-cottage', maxW: 1600, quality: 85 },
  { prefix: 'rooms_family_suite', name: 'rooms-family-suite', maxW: 1600, quality: 85 },
  { prefix: 'rooms_verandah_tea', name: 'rooms-verandah-tea', maxW: 1400, quality: 85 },
  { prefix: 'rooms_bathroom_detail', name: 'rooms-bathroom-detail', maxW: 1400, quality: 85 },
];

async function processImages() {
  if (!fs.existsSync(TARGET_DIR)) {
    fs.mkdirSync(TARGET_DIR, { recursive: true });
  }

  const files = fs.readdirSync(ARTIFACTS_DIR);

  for (const item of imageMap) {
    const match = files.find(f => f.startsWith(item.prefix) && f.endsWith('.jpg'));
    if (!match) {
      console.warn(`File matching ${item.prefix} not found!`);
      continue;
    }

    const srcPath = path.join(ARTIFACTS_DIR, match);
    const destWebp = path.join(TARGET_DIR, `${item.name}.webp`);
    const destJpg = path.join(TARGET_DIR, `${item.name}.jpg`);

    console.log(`Processing ${match} -> ${item.name}.webp & .jpg`);

    await sharp(srcPath)
      .resize({ width: item.maxW, withoutEnlargement: true })
      .webp({ quality: item.quality })
      .toFile(destWebp);

    await sharp(srcPath)
      .resize({ width: item.maxW, withoutEnlargement: true })
      .jpeg({ quality: item.quality })
      .toFile(destJpg);
  }

  console.log('All rooms & accommodations images processed successfully.');
}

processImages().catch(err => {
  console.error(err);
  process.exit(1);
});
