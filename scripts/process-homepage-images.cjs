const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const ARTIFACTS_DIR = 'C:\\Users\\Asus\\.gemini\\antigravity-ide\\brain\\f7ac385c-1559-4882-a419-2155fabbff8d';
const TARGET_DIR = path.resolve(__dirname, '..', 'public', 'assets', 'images', 'homepage');

const imageMap = [
  { prefix: 'home_hero_pench', name: 'home-hero-pench', maxW: 1920, quality: 85 },
  { prefix: 'home_safari_pench', name: 'home-safari', maxW: 1600, quality: 85 },
  { prefix: 'home_cottage_stay', name: 'home-stay', maxW: 1400, quality: 85 },
  { prefix: 'home_resort_grounds', name: 'home-resort', maxW: 1600, quality: 85 },
  { prefix: 'home_dining_evening', name: 'home-dining', maxW: 1400, quality: 85 },
  { prefix: 'home_tiger_wildlife', name: 'home-tiger', maxW: 1600, quality: 85 },
  { prefix: 'home_couples_retreat', name: 'home-couples', maxW: 1400, quality: 85 },
  { prefix: 'home_family_escape', name: 'home-family', maxW: 1400, quality: 85 },
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

    console.log(`Processing ${match} -> ${item.name}.webp`);

    await sharp(srcPath)
      .resize({ width: item.maxW, withoutEnlargement: true })
      .webp({ quality: item.quality })
      .toFile(destWebp);

    await sharp(srcPath)
      .resize({ width: item.maxW, withoutEnlargement: true })
      .jpeg({ quality: item.quality })
      .toFile(destJpg);
  }

  console.log('All homepage images processed successfully.');
}

processImages().catch(err => {
  console.error(err);
  process.exit(1);
});
