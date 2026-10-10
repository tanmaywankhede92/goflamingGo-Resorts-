const ffmpeg = require('ffmpeg-static');
const { execSync } = require('child_process');

try {
  execSync(`"${ffmpeg}" -y -ss 00:00:01 -i "public/assets/goflamingo_loader (1).mp4" -vframes 1 "scratch/frame_1.jpg"`);
  execSync(`"${ffmpeg}" -y -ss 00:00:02.5 -i "public/assets/goflamingo_loader (1).mp4" -vframes 1 "scratch/frame_2.jpg"`);
  console.log("Frames extracted successfully!");
} catch (e) {
  console.log(e.stdout ? e.stdout.toString() : e.message);
}
