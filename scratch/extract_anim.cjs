const ffmpeg = require('ffmpeg-static');
const { execSync } = require('child_process');

[0.1, 1.0, 2.0, 3.0, 4.0, 4.9].forEach((t, i) => {
  try {
    execSync(`"${ffmpeg}" -y -ss 00:00:0${t} -i "public/assets/goflamingo_loader.mp4" -vframes 1 "scratch/anim_${i}.jpg"`);
    console.log(`Extracted anim_${i}.jpg at ${t}s`);
  } catch(e) {}
});
