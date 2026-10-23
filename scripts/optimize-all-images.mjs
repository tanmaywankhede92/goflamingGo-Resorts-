import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const targetDirs = [
  'public/assets/resort_drive',
  'public/assets/images',
];

async function processFile(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (!['.jpg', '.jpeg', '.png'].includes(ext)) return;

  const originalStat = fs.statSync(filePath);
  const originalSize = originalStat.size;

  try {
    // Read to memory buffer first so Windows file handle is released
    const inputBuffer = fs.readFileSync(filePath);
    const meta = await sharp(inputBuffer).metadata();

    let transformer = sharp(inputBuffer);
    if (meta.width && meta.width > 1600) {
      transformer = transformer.resize({ width: 1600, withoutEnlargement: true });
    }

    let buffer;
    if (ext === '.png') {
      buffer = await transformer.png({ quality: 82, compressionLevel: 8 }).toBuffer();
    } else {
      buffer = await transformer.jpeg({ quality: 80, mozjpeg: true, progressive: true }).toBuffer();
    }

    if (buffer.length < originalSize) {
      fs.writeFileSync(filePath, buffer);
      const saved = originalSize - buffer.length;
      console.log(`Optimized ${path.basename(filePath)}: ${(originalSize/1024).toFixed(0)}KB -> ${(buffer.length/1024).toFixed(0)}KB (saved ${(saved/1024).toFixed(0)}KB)`);
      return { originalSize, newSize: buffer.length };
    } else {
      return { originalSize, newSize: originalSize };
    }
  } catch (err) {
    console.warn(`Error on ${filePath}: ${err.message}`);
    return { originalSize, newSize: originalSize };
  }
}

async function walk(dir) {
  let files = [];
  for (const item of fs.readdirSync(dir)) {
    const full = path.join(dir, item);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      files = files.concat(await walk(full));
    } else {
      files.push(full);
    }
  }
  return files;
}

async function run() {
  let totalOriginal = 0;
  let totalNew = 0;

  for (const dir of targetDirs) {
    if (!fs.existsSync(dir)) continue;
    const files = await walk(dir);
    for (const f of files) {
      const res = await processFile(f);
      if (res) {
        totalOriginal += res.originalSize;
        totalNew += res.newSize;
      }
    }
  }

  console.log('--- COMPRESSION COMPLETE ---');
  console.log(`Original: ${(totalOriginal / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Optimized: ${(totalNew / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Total Saved: ${((totalOriginal - totalNew) / 1024 / 1024).toFixed(2)} MB (${(((totalOriginal - totalNew) / totalOriginal) * 100).toFixed(1)}% reduction)`);
}

run();
