const { execSync } = require('child_process');
const ffmpeg = require('ffmpeg-static');
const path = require('path');
const fs = require('fs');

const videoPath = path.resolve('public/assets/assests of goflaming/VID-20261003-WA0023.mp4');
const outDir = path.resolve('public/assets/videos');

// 1. Hero Haveli Courtyard: 23.0s to 26.8s (3.8s duration)
// Crop letterboxing 720:504:0:108
const heroMp4 = path.join(outDir, 'resort-hero-haveli.mp4');
const heroWebm = path.join(outDir, 'resort-hero-haveli.webm');
const heroPoster = path.join(outDir, 'resort-hero-haveli-poster.webp');

console.log('Rendering resort-hero-haveli.mp4...');
execSync(`"${ffmpeg}" -y -ss 23.0 -t 3.8 -i "${videoPath}" -vf "crop=720:504:0:108" -c:v libx264 -preset slow -crf 22 -an -movflags +faststart "${heroMp4}"`, { stdio: 'pipe' });

console.log('Rendering resort-hero-haveli.webm...');
execSync(`"${ffmpeg}" -y -ss 23.0 -t 3.8 -i "${videoPath}" -vf "crop=720:504:0:108" -c:v libvpx-vp9 -b:v 800k -crf 28 -an "${heroWebm}"`, { stdio: 'pipe' });

console.log('Rendering resort-hero-haveli-poster.webp...');
execSync(`"${ffmpeg}" -y -ss 24.2 -i "${videoPath}" -vf "crop=720:504:0:108" -frames:v 1 -c:v libwebp -quality 85 "${heroPoster}"`, { stdio: 'pipe' });

console.log('Done rendering haveli hero video!');
