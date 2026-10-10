const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function main() {
  const photosDir = path.resolve('public/assets/assests of goflaming');
  const photos = fs.readdirSync(photosDir).filter(f => f.endsWith('.jpg'));
  
  console.log('=== PHOTOS ANALYSIS ===');
  for (const photo of photos) {
    const p = path.join(photosDir, photo);
    const meta = await sharp(p).metadata();
    const stats = await sharp(p).stats();
    console.log(`Photo: ${photo} | ${meta.width}x${meta.height} | Channels: ${meta.channels} | Dominant: R:${Math.round(stats.channels[0].mean)}, G:${Math.round(stats.channels[1].mean)}, B:${Math.round(stats.channels[2].mean)}`);
  }

  console.log('\n=== VIDEO FRAMES ANALYSIS ===');
  const framesDir = path.resolve('scratch/video_frames');
  const frames = fs.readdirSync(framesDir).filter(f => f.endsWith('.jpg')).sort();
  for (const frame of frames) {
    const fp = path.join(framesDir, frame);
    const meta = await sharp(fp).metadata();
    const stats = await sharp(fp).stats();
    // detect if there are black letterbox bars at top/bottom or sides
    // Let's sample top 20 lines, bottom 20 lines, left 20 lines, right 20 lines
    const topBar = await sharp(fp).extract({ left: 0, top: 0, width: meta.width, height: 30 }).stats();
    const bottomBar = await sharp(fp).extract({ left: 0, top: meta.height - 30, width: meta.width, height: 30 }).stats();
    const center = await sharp(fp).extract({ left: Math.floor(meta.width*0.25), top: Math.floor(meta.height*0.25), width: Math.floor(meta.width*0.5), height: Math.floor(meta.height*0.5) }).stats();
    
    console.log(`Frame ${frame}: center-mean=${Math.round(center.channels[0].mean + center.channels[1].mean + center.channels[2].mean)/3} | top-mean=${Math.round(topBar.channels[0].mean + topBar.channels[1].mean + topBar.channels[2].mean)/3} | bot-mean=${Math.round(bottomBar.channels[0].mean + bottomBar.channels[1].mean + bottomBar.channels[2].mean)/3}`);
  }
}

main().catch(console.error);
