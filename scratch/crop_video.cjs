const ffmpeg = require('ffmpeg-static');
const { execSync } = require('child_process');

// Logo is at X:[387, 890] (width 503), Y:[231, 535] (height 304).
// Center is X=638, Y=383.
// Let's create a cropped version: width 640, height 400.
// X offset = (1280 - 640) / 2 = 320.
// Y offset = 383 - 200 = 183.
// Crop string: "crop=640:400:320:184"
try {
  execSync(`"${ffmpeg}" -y -i "public/assets/goflamingo_loader (1).mp4" -vf "crop=640:400:320:184" -c:v libx264 -crf 18 -preset fast -pix_fmt yuv420p "public/assets/goflamingo_loader_cropped.mp4"`);
  console.log("Successfully created goflamingo_loader_cropped.mp4");
  
  // Extract frame at 2.5s to inspect
  execSync(`"${ffmpeg}" -y -ss 00:00:02.5 -i "public/assets/goflamingo_loader_cropped.mp4" -vframes 1 "scratch/cropped_frame.jpg"`);
  console.log("Extracted scratch/cropped_frame.jpg");
} catch (e) {
  console.log(e.stdout ? e.stdout.toString() : e.message);
}
