const ffmpeg = require('ffmpeg-static');
const { execSync } = require('child_process');

try {
  const info = execSync(`"${ffmpeg}" -i "public/assets/goflamingo_loader (1).mp4" 2>&1`).toString();
  const lines = info.split('\n').filter(l => l.includes('Duration') || l.includes('Video:'));
  console.log(lines.join('\n'));
} catch (e) {
  console.log(e.stdout ? e.stdout.toString() : e.message);
}
