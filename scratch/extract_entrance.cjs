const { execSync } = require('child_process');
const ffmpeg = require('ffmpeg-static');
const path = require('path');
const fs = require('fs');

const videoPath = path.resolve('public/assets/assests of goflaming/VID-20261003-WA0023.mp4');
const outDir = path.resolve('scratch/entrance_frames');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

for (let s = 14.0; s <= 20.0; s += 0.5) {
  const out = path.join(outDir, `frame_${s.toFixed(1)}s.jpg`);
  execSync(`"${ffmpeg}" -y -ss ${s} -i "${videoPath}" -vf "crop=720:504:0:108" -frames:v 1 -q:v 2 "${out}"`, { stdio: 'pipe' });
}
console.log('Successfully extracted entrance frames 14.0s - 20.0s');
