const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const { execSync } = require('child_process');
const ffmpeg = require('ffmpeg-static');

const publicDir = path.resolve('public/assets');
const videosOutDir = path.join(publicDir, 'videos');
const imagesOutDir = path.join(publicDir, 'images/resort-authentic');

if (!fs.existsSync(imagesOutDir)) fs.mkdirSync(imagesOutDir, { recursive: true });

const rawMediaDir = path.resolve('public/assets/assests of goflaming');
const sourceVideo = path.join(rawMediaDir, 'VID-20261003-WA0023.mp4');

// 1. Generate Posters cleanly
const posters = [
  { name: 'resort-hero-aerial-poster', time: '00:00:52.0' },
  { name: 'resort-courtyard-poster', time: '00:00:25.0' },
  { name: 'resort-pool-poster', time: '00:00:35.0' },
  { name: 'resort-entrance-poster', time: '00:00:16.5' },
];

async function generatePosters() {
  console.log('Generating posters...');
  for (const p of posters) {
    const tempJpg = path.join(videosOutDir, `temp_${p.name}.jpg`);
    const outWebp = path.join(videosOutDir, `${p.name}.webp`);
    try {
      execSync(`"${ffmpeg}" -y -ss ${p.time} -i "${sourceVideo}" -vf "crop=720:504:0:108,eq=contrast=1.04:brightness=0.01:saturation=1.05" -frames:v 1 -q:v 2 "${tempJpg}"`, { stdio: 'pipe' });
      await sharp(tempJpg)
        .webp({ quality: 88, effort: 6 })
        .toFile(outWebp);
      console.log(`Poster created: ${path.basename(outWebp)} (${(fs.statSync(outWebp).size / 1024).toFixed(1)} KB)`);
      try { fs.unlinkSync(tempJpg); } catch (e) {}
    } catch (e) {
      console.error(`Error on poster ${p.name}:`, e.message);
    }
  }
}

// 2. Process all 8 authentic photos
const photoMapping = [
  {
    raw: 'IMG-20251023-WA0005.jpg',
    key: 'courtyard-twilight',
    title: 'Illuminated central garden courtyard and haveli-style wings at twilight',
    sizes: [1280, 800, 480]
  },
  {
    raw: 'IMG-20251023-WA0012.jpg',
    key: 'arched-corridor-fountain',
    title: 'Arched haveli corridor overlooking garden with sculptured water fountain',
    sizes: [1280, 800, 480]
  },
  {
    raw: 'IMG-20251023-WA0020.jpg',
    key: 'resort-entrance-porch',
    title: 'Go Flamingo Resort grand arched entrance portico and signage',
    sizes: [1080, 720, 480]
  },
  {
    raw: 'IMG-20251023-WA0033.jpg',
    key: 'sunlit-verandah',
    title: 'Sunlit arched verandah walkway and lush garden greenery',
    sizes: [1280, 800, 480]
  },
  {
    raw: 'IMG-20261003-WA0009.jpg',
    key: 'restaurant-bar-hall',
    title: 'Grand restaurant dining hall with crystal chandeliers, bar counter and games zone',
    sizes: [1600, 1024, 600]
  },
  {
    raw: 'IMG-20261003-WA0011.jpg',
    key: 'deluxe-bedroom',
    title: 'Deluxe guest bedroom with teak wood king bed, AC, TV and private balcony view',
    sizes: [1600, 1024, 600]
  },
  {
    raw: 'IMG-20261003-WA0015.jpg',
    key: 'dining-banquet-arches',
    title: 'Restaurant dining room with arched etched-glass windows and booth seating',
    sizes: [1600, 1024, 600]
  },
  {
    raw: 'IMG-20261003-WA0017.jpg',
    key: 'dormitory-room',
    title: 'Spacious group dormitory accommodation with individual beds and clean linens',
    sizes: [1440, 960, 540]
  }
];

async function processPhotos() {
  console.log('Processing authentic photos with Sharp...');
  for (const item of photoMapping) {
    const rawPath = path.join(rawMediaDir, item.raw);
    if (!fs.existsSync(rawPath)) {
      console.warn(`File not found: ${rawPath}`);
      continue;
    }

    console.log(`Processing: ${item.key} (${item.raw})`);
    for (const width of item.sizes) {
      const outWebp = path.join(imagesOutDir, `${item.key}-${width}w.webp`);
      await sharp(rawPath)
        .resize({ width, withoutEnlargement: true })
        .modulate({ brightness: 1.02, saturation: 1.04 })
        .sharpen({ sigma: 0.8, m1: 0.5, m2: 2 })
        .webp({ quality: 86, effort: 6 })
        .toFile(outWebp);
      console.log(`  -> ${path.basename(outWebp)} (${(fs.statSync(outWebp).size / 1024).toFixed(1)} KB)`);
    }

    const fullWebp = path.join(imagesOutDir, `${item.key}.webp`);
    await sharp(rawPath)
      .modulate({ brightness: 1.02, saturation: 1.04 })
      .sharpen({ sigma: 0.8, m1: 0.5, m2: 2 })
      .webp({ quality: 88, effort: 6 })
      .toFile(fullWebp);
    console.log(`  -> Full: ${path.basename(fullWebp)} (${(fs.statSync(fullWebp).size / 1024).toFixed(1)} KB)`);
  }
  console.log('Photo processing completed successfully!');
}

async function run() {
  await generatePosters();
  await processPhotos();
}

run().catch(console.error);
