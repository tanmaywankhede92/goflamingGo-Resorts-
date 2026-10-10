const ffmpeg = require('ffmpeg-static');
const { execSync } = require('child_process');

try {
  // Crop with generous, balanced margins:
  // width: 640, height: 440, x: 320, y: 140
  execSync(`"${ffmpeg}" -y -i "public/assets/goflamingo_loader (1).mp4" -vf "crop=640:440:320:140" -c:v libx264 -crf 17 -preset fast -pix_fmt yuv420p "public/assets/goflamingo_loader_cropped.mp4"`);
  console.log("Successfully created goflamingo_loader_cropped.mp4 with balanced margins");
  
  execSync(`"${ffmpeg}" -y -ss 00:00:02.5 -i "public/assets/goflamingo_loader_cropped.mp4" -vframes 1 "scratch/cropped_frame_balanced.jpg"`);
  execSync(`"${ffmpeg}" -y -ss 00:00:00.1 -i "public/assets/goflamingo_loader_cropped.mp4" -vframes 1 "public/assets/goflamingo_loader_poster.jpg"`);
  console.log("Extracted frame and updated poster!");
} catch (e) {
  console.log(e.stdout ? e.stdout.toString() : e.message);
}
