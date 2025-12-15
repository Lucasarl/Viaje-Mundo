const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, 'src', 'images');
const outputDir = path.join(__dirname, 'src', 'images', 'optimized');
const sizes = [400, 800, 1200];
const formats = [
  { ext: 'jpg', options: { quality: 80 } },
  { ext: 'webp', options: { quality: 80 } },
  { ext: 'avif', options: { quality: 50 } }
];

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

fs.readdirSync(inputDir).forEach(file => {
  if (file === 'favicon-info.txt') return;
  const ext = path.extname(file).toLowerCase();
  if (!['.jpg', '.jpeg', '.png'].includes(ext)) return;
  const inputImage = path.join(inputDir, file);
  const baseName = path.parse(file).name;
  sizes.forEach(size => {
    formats.forEach(format => {
      const outputFile = path.join(outputDir, `${baseName}-${size}.${format.ext}`);
      let pipeline = sharp(inputImage).resize(size);
      if (format.ext === 'jpg') pipeline = pipeline.jpeg(format.options);
      else if (format.ext === 'webp') pipeline = pipeline.webp(format.options);
      else if (format.ext === 'avif') pipeline = pipeline.avif(format.options);
      pipeline
        .toFile(outputFile)
        .then(() => console.log(`Generada: ${outputFile}`))
        .catch(err => console.error(`Error generando ${outputFile}:`, err));
    });
  });
});
