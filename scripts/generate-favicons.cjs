const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function createFavicons() {
  const root = path.resolve(__dirname, '..');
  const buf192 = await fs.promises.readFile(path.join(root, 'public', 'favicon-flamingo.png'));
  
  await sharp(buf192).resize(32, 32).toFile(path.join(root, 'public', 'favicon-32x32.png'));
  await sharp(buf192).resize(180, 180).toFile(path.join(root, 'public', 'apple-touch-icon.png'));
  
  const b64 = buf192.toString('base64');
  const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <circle cx="64" cy="64" r="60" fill="#1B382B" stroke="#C5A059" stroke-width="3" />
  <circle cx="64" cy="64" r="53" fill="#FAF6EE" />
  <image href="data:image/png;base64,${b64}" x="18" y="18" width="92" height="92" />
</svg>`;
  fs.writeFileSync(path.join(root, 'public', 'favicon.svg'), svgContent.trim());
  console.log('Favicons generated successfully.');
}

createFavicons().catch(err => {
  console.error(err);
  process.exit(1);
});
