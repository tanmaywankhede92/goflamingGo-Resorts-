const { execSync } = require('child_process');
const ffmpeg = require('ffmpeg-static');
const path = require('path');
const fs = require('fs');

const videoPath = path.resolve('public/assets/assests of goflaming/VID-20261003-WA0023.mp4');
const outDir = path.resolve('scratch/multi_shot_frames');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

// Extract aerial frames 48s to 54s
for (let s = 48; s <= 54; s += 1) {
  const out = path.join(outDir, `aerial_${s}s.jpg`);
  execSync(`"${ffmpeg}" -y -ss ${s} -i "${videoPath}" -vf "crop=720:504:0:108" -frames:v 1 -q:v 2 "${out}"`, { stdio: 'pipe' });
}

// Extract pool frames 32.5s to 36s
for (let s = 32.5; s <= 36.0; s += 0.5) {
  const out = path.join(outDir, `pool_${s.toFixed(1)}s.jpg`);
  execSync(`"${ffmpeg}" -y -ss ${s} -i "${videoPath}" -vf "crop=720:504:0:108" -frames:v 1 -q:v 2 "${out}"`, { stdio: 'pipe' });
}

console.log('Extracted aerial and pool frames successfully!');
