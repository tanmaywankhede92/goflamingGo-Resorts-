const ffmpeg = require('ffmpeg-static');
const { execSync } = require('child_process');

try {
  execSync(`"${ffmpeg}" -y -i "public/assets/goflamingo_loader_cropped.mp4" -vf "fps=15,split[s0][s1];[s0]palettegen=max_colors=128[p];[s1][p]paletteuse=dither=bayer" "public/assets/goflamingo_loader_cropped.gif"`);
  console.log("Created public/assets/goflamingo_loader_cropped.gif successfully!");
} catch (e) {
  console.log(e.stdout ? e.stdout.toString() : e.message);
}
