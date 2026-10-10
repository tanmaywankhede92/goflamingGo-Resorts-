const { execSync } = require('child_process');
const ffmpeg = require('ffmpeg-static');
const path = require('path');
const fs = require('fs');

const videoPath = path.resolve('public/assets/assests of goflaming/VID-20261003-WA0023.mp4');
const outDir = path.resolve('scratch/all_seconds');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

// Extract every second from 0 to 60 with crop to remove black bars (720x504 at 0,108)
for (let sec = 0; sec <= 59; sec += 1) {
  const frameOut = path.join(outDir, `sec_${String(sec).padStart(2, '0')}.jpg`);
  try {
    execSync(`"${ffmpeg}" -y -ss ${sec} -i "${videoPath}" -vf "crop=720:504:0:108" -frames:v 1 -q:v 2 "${frameOut}"`, { stdio: 'pipe' });
  } catch (err) {}
}

console.log('Extracted 60 seconds cropped');
