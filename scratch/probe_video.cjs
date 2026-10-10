const { execSync } = require('child_process');
const ffmpeg = require('ffmpeg-static');
const path = require('path');
const fs = require('fs');

const videoPath = path.resolve('public/assets/assests of goflaming/VID-20261003-WA0023.mp4');
const outDir = path.resolve('scratch/video_frames');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

console.log('Video path:', videoPath);
try {
  execSync(`"${ffmpeg}" -i "${videoPath}"`, { stdio: 'pipe' });
} catch (err) {
  console.log('Video Info:');
  console.log(err.stderr.toString());
}

// Extract frames every 2 seconds to inspect shots
const timestamps = [1, 3, 6, 9, 12, 15, 18, 20, 23, 27, 30, 34, 38, 42, 45, 48, 51, 54, 57, 59];
for (const sec of timestamps) {
  const frameOut = path.join(outDir, `frame_${String(sec).padStart(2, '0')}s.jpg`);
  try {
    execSync(`"${ffmpeg}" -y -ss ${sec} -i "${videoPath}" -frames:v 1 -q:v 2 "${frameOut}"`, { stdio: 'pipe' });
    console.log(`Extracted frame at ${sec}s -> ${path.basename(frameOut)}`);
  } catch (err) {
    console.error(`Failed at ${sec}s:`, err.message);
  }
}
