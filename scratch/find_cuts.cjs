const { execSync } = require('child_process');
const ffmpeg = require('ffmpeg-static');
const path = require('path');
const fs = require('fs');

const videoPath = path.resolve('public/assets/assests of goflaming/VID-20261003-WA0023.mp4');
const outDir = path.resolve('scratch/video_cuts');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

// Extract frames 1s apart from 14s to 56s
for (let sec = 14; sec <= 56; sec += 2) {
  const frameOut = path.join(outDir, `cut_${String(sec).padStart(2, '0')}s.jpg`);
  try {
    execSync(`"${ffmpeg}" -y -ss ${sec} -i "${videoPath}" -frames:v 1 -q:v 2 "${frameOut}"`, { stdio: 'pipe' });
  } catch (err) {}
}

console.log('Extracted frames 14-56s');
