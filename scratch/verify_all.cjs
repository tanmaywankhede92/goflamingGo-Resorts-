const fs = require('fs');
const path = require('path');

const checks = [
  // Videos & Posters
  'public/assets/videos/resort-hero-aerial.mp4',
  'public/assets/videos/resort-hero-aerial.webm',
  'public/assets/videos/resort-hero-aerial-poster.webp',
  'public/assets/videos/resort-courtyard.mp4',
  'public/assets/videos/resort-courtyard.webm',
  'public/assets/videos/resort-courtyard-poster.webp',
  'public/assets/videos/resort-pool.mp4',
  'public/assets/videos/resort-pool.webm',
  'public/assets/videos/resort-pool-poster.webp',
  'public/assets/videos/resort-entrance.mp4',
  'public/assets/videos/resort-entrance.webm',
  'public/assets/videos/resort-entrance-poster.webp',

  // Photos
  'public/assets/images/resort-authentic/courtyard-twilight.webp',
  'public/assets/images/resort-authentic/courtyard-twilight-1280w.webp',
  'public/assets/images/resort-authentic/courtyard-twilight-800w.webp',
  'public/assets/images/resort-authentic/courtyard-twilight-480w.webp',
  'public/assets/images/resort-authentic/arched-corridor-fountain.webp',
  'public/assets/images/resort-authentic/arched-corridor-fountain-1280w.webp',
  'public/assets/images/resort-authentic/resort-entrance-porch.webp',
  'public/assets/images/resort-authentic/sunlit-verandah.webp',
  'public/assets/images/resort-authentic/restaurant-bar-hall.webp',
  'public/assets/images/resort-authentic/deluxe-bedroom.webp',
  'public/assets/images/resort-authentic/dining-banquet-arches.webp',
  'public/assets/images/resort-authentic/dormitory-room.webp',
];

console.log('=== VERIFYING MEDIA FILES ===');
let allExist = true;
for (const rel of checks) {
  const p = path.resolve(rel);
  if (!fs.existsSync(p)) {
    console.error(`MISSING: ${rel}`);
    allExist = false;
  } else {
    const sz = (fs.statSync(p).size / 1024).toFixed(1);
    console.log(`OK: ${rel} (${sz} KB)`);
  }
}

if (allExist) {
  console.log('ALL REQUIRED MEDIA ASSETS VERIFIED SUCCESSFULLY!');
}
