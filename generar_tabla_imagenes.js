const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, 'src', 'images');
const optimizedDir = path.join(inputDir, 'optimized');
const outputTable = path.join(__dirname, 'tabla_imagenes.md');

// Obtener imágenes originales (solo .jpg, .jpeg, .png)
const originales = fs.readdirSync(inputDir)
  .filter(f => ['.jpg', '.jpeg', '.png'].includes(path.extname(f).toLowerCase()));

// Mapear nombre base a tamaño original
const originalInfo = {};
for (const file of originales) {
  const filePath = path.join(inputDir, file);
  const stats = fs.statSync(filePath);
  originalInfo[path.parse(file).name] = {
    nombre: file,
    formato: path.extname(file).slice(1),
    peso: stats.size
  };
}

// Obtener optimizadas
const optimizadas = fs.readdirSync(optimizedDir)
  .filter(f => /-(400|800|1200)\.(jpg|webp|avif)$/.test(f));

// Construir tabla
let tabla = '| Imagen original | Formato original | Imagen optimizada | Formato nuevo | Tamaño original (bytes) | Tamaño optimizado (bytes) | Mejora (%) |\n';
tabla += '|----------------|------------------|-------------------|--------------|-------------------------|--------------------------|------------|\n';

for (const opt of optimizadas) {
  const match = opt.match(/^(.*)-(400|800|1200)\.(jpg|webp|avif)$/);
  if (!match) continue;
  const [_, base, size, formatoNuevo] = match;
  const original = originalInfo[base];
  if (!original) continue;
  const optPath = path.join(optimizedDir, opt);
  const optStats = fs.statSync(optPath);
  const mejora = 100 - ((optStats.size / original.peso) * 100);
  tabla += `| ${original.nombre} | ${original.formato} | ${opt} | ${formatoNuevo} | ${original.peso} | ${optStats.size} | ${mejora.toFixed(1)}% |\n`;
}

fs.writeFileSync(outputTable, tabla);
console.log('Tabla generada en', outputTable);