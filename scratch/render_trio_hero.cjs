const { execSync } = require('child_process');
const ffmpeg = require('ffmpeg-static');
const path = require('path');
const fs = require('fs');

const videoPath = path.resolve('public/assets/assests of goflaming/VID-20261003-WA0023.mp4');
const outDir = path.resolve('public/assets/videos');

const finalMp4 = path.join(outDir, 'resort-hero-combined.mp4');
const finalWebm = path.join(outDir, 'resort-hero-combined.webm');
const finalPoster = path.join(outDir, 'resort-hero-combined-poster.webp');

console.log('Rendering trio hero sequence (Resort Aerial 4.5s + Haveli Courtyard 3.5s + Pool 2.0s)...');

// Input 0: Aerial 48.5s for 4.5s
// Input 1: Haveli 23.2s for 3.5s
// Input 2: Pool 32.8s for 2.0s
// Both cropped to 720:504:0:108
// Fade 1: offset 4.0s, duration 0.5s => intermediate length 7.5s
// Fade 2: offset 7.0s, duration 0.5s => final length 9.0s
const filterComplex = 
  `[0:v]crop=720:504:0:108,setpts=PTS-STARTPTS[v0];` +
  `[1:v]crop=720:504:0:108,setpts=PTS-STARTPTS[v1];` +
  `[2:v]crop=720:504:0:108,setpts=PTS-STARTPTS[v2];` +
  `[v0][v1]xfade=transition=fade:duration=0.5:offset=4.0[v01];` +
  `[v01][v2]xfade=transition=fade:duration=0.5:offset=7.0[vout]`;

// 1. MP4
console.log('Compiling MP4...');
execSync(`"${ffmpeg}" -y -ss 48.5 -t 4.5 -i "${videoPath}" -ss 23.2 -t 3.5 -i "${videoPath}" -ss 32.8 -t 2.0 -i "${videoPath}" -filter_complex "${filterComplex}" -map "[vout]" -c:v libx264 -preset slow -crf 21 -pix_fmt yuv420p -an -movflags +faststart "${finalMp4}"`, { stdio: 'inherit' });

// 2. WebM
console.log('Compiling WebM...');
execSync(`"${ffmpeg}" -y -ss 48.5 -t 4.5 -i "${videoPath}" -ss 23.2 -t 3.5 -i "${videoPath}" -ss 32.8 -t 2.0 -i "${videoPath}" -filter_complex "${filterComplex}" -map "[vout]" -c:v libvpx-vp9 -b:v 950k -crf 26 -pix_fmt yuv420p -an "${finalWebm}"`, { stdio: 'inherit' });

// 3. High quality poster from the resort aerial shot (frame at ~50.5s)
console.log('Generating poster WebP...');
execSync(`"${ffmpeg}" -y -ss 50.5 -i "${videoPath}" -vf "crop=720:504:0:108" -frames:v 1 -c:v libwebp -quality 85 "${finalPoster}"`, { stdio: 'inherit' });

const statsMp4 = fs.statSync(finalMp4);
const statsWebm = fs.statSync(finalWebm);
const statsPoster = fs.statSync(finalPoster);

console.log(`Successfully rendered 3-shot hero video!`);
console.log(`MP4 size: ${statsMp4.size} bytes`);
console.log(`WebM size: ${statsWebm.size} bytes`);
console.log(`Poster size: ${statsPoster.size} bytes`);
