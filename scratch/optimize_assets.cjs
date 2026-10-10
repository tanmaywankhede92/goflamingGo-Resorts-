const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const ffmpeg = require('ffmpeg-static');
const sharp = require('sharp');

const publicDir = path.resolve('public/assets');
const videosOutDir = path.join(publicDir, 'videos');
const imagesOutDir = path.join(publicDir, 'images/resort-authentic');

if (!fs.existsSync(videosOutDir)) fs.mkdirSync(videosOutDir, { recursive: true });
if (!fs.existsSync(imagesOutDir)) fs.mkdirSync(imagesOutDir, { recursive: true });

const rawMediaDir = path.resolve('public/assets/assests of goflaming');
const sourceVideo = path.join(rawMediaDir, 'VID-20261003-WA0023.mp4');

console.log('=== STARTING ASSET PROCESSING ===');

// 1. Process Video Clips
// Crop 720:504:0:108 removes black letterboxing cleanly.
// We apply mild contrast & brightness balance and h264/webm encoding with web-optimized settings.

const clips = [
  {
    name: 'resort-hero-aerial',
    start: '00:00:48.0',
    duration: '7.0',
    posterTime: '00:00:52.0'
  },
  {
    name: 'resort-courtyard',
    start: '00:00:23.0',
    duration: '4.5',
    posterTime: '00:00:25.0'
  },
  {
    name: 'resort-pool',
    start: '00:00:33.0',
    duration: '3.8',
    posterTime: '00:00:35.0'
  },
  {
    name: 'resort-entrance',
    start: '00:00:15.5',
    duration: '3.0',
    posterTime: '00:00:16.5'
  }
];

for (const clip of clips) {
  const mp4Out = path.join(videosOutDir, `${clip.name}.mp4`);
  const webmOut = path.join(videosOutDir, `${clip.name}.webm`);
  const posterJpg = path.join(videosOutDir, `${clip.name}-poster.jpg`);
  const posterWebp = path.join(videosOutDir, `${clip.name}-poster.webp`);

  console.log(`Processing clip: ${clip.name} (from ${clip.start} for ${clip.duration}s)...`);

  // Extract MP4: crf 22, faststart, no audio (-an), crop letterboxing
  try {
    execSync(`"${ffmpeg}" -y -ss ${clip.start} -i "${sourceVideo}" -t ${clip.duration} -vf "crop=720:504:0:108,eq=contrast=1.04:brightness=0.01:saturation=1.05" -c:v libx264 -preset slow -crf 22 -movflags +faststart -an "${mp4Out}"`, { stdio: 'pipe' });
    console.log(`  -> Generated ${path.basename(mp4Out)} (${(fs.statSync(mp4Out).size / 1024).toFixed(1)} KB)`);
  } catch (err) {
    console.error(`  Error generating MP4 for ${clip.name}:`, err.message);
  }

  // Extract WebM
  try {
    execSync(`"${ffmpeg}" -y -ss ${clip.start} -i "${sourceVideo}" -t ${clip.duration} -vf "crop=720:504:0:108,eq=contrast=1.04:brightness=0.01:saturation=1.05" -c:v libvpx-vp9 -b:v 800k -crf 30 -an "${webmOut}"`, { stdio: 'pipe' });
    console.log(`  -> Generated ${path.basename(webmOut)} (${(fs.statSync(webmOut).size / 1024).toFixed(1)} KB)`);
  } catch (err) {
    console.warn(`  Warning generating WebM for ${clip.name}:`, err.message);
  }

  // Extract poster frame
  try {
    execSync(`"${ffmpeg}" -y -ss ${clip.posterTime} -i "${sourceVideo}" -vf "crop=720:504:0:108,eq=contrast=1.04:brightness=0.01:saturation=1.05" -frames:v 1 -q:v 2 "${posterJpg}"`, { stdio: 'pipe' });
    // Convert poster to high-quality WebP with Sharp
    sharp(posterJpg)
      .webp({ quality: 85, effort: 6 })
      .toFile(posterWebp)
      .then(() => {
        console.log(`  -> Generated poster: ${path.basename(posterWebp)} (${(fs.statSync(posterWebp).size / 1024).toFixed(1)} KB)`);
        if (fs.existsSync(posterJpg)) fs.unlinkSync(posterJpg);
      });
  } catch (err) {
    console.error(`  Error generating poster for ${clip.name}:`, err.message);
  }
}

// 2. Process Photos into Responsive WebP with Sharp
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
  console.log('\n=== PROCESSING AUTHENTIC PHOTOS ===');
  for (const item of photoMapping) {
    const rawPath = path.join(rawMediaDir, item.raw);
    if (!fs.existsSync(rawPath)) {
      console.warn(`File not found: ${rawPath}`);
      continue;
    }

    console.log(`Processing photo: ${item.key} (${item.raw})...`);
    for (const width of item.sizes) {
      const outWebp = path.join(imagesOutDir, `${item.key}-${width}w.webp`);
      await sharp(rawPath)
        .resize({ width, withoutEnlargement: true })
        // subtle tone and clarity enhancement without falsifying the property
        .modulate({ brightness: 1.02, saturation: 1.04 })
        .sharpen({ sigma: 0.8, m1: 0.5, m2: 2 })
        .webp({ quality: 86, effort: 6 })
        .toFile(outWebp);

      console.log(`  -> ${path.basename(outWebp)} (${(fs.statSync(outWebp).size / 1024).toFixed(1)} KB)`);
    }

    // Also produce full size webp
    const fullWebp = path.join(imagesOutDir, `${item.key}.webp`);
    await sharp(rawPath)
      .modulate({ brightness: 1.02, saturation: 1.04 })
      .sharpen({ sigma: 0.8, m1: 0.5, m2: 2 })
      .webp({ quality: 88, effort: 6 })
      .toFile(fullWebp);
    console.log(`  -> ${path.basename(fullWebp)} (${(fs.statSync(fullWebp).size / 1024).toFixed(1)} KB)`);
  }
  console.log('=== ASSET PROCESSING COMPLETE ===');
}

processPhotos().catch(console.error);
