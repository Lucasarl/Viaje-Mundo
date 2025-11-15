# 🌍 Viaje Mundo - Sitio Web de Viajes

> **Sitio web responsive de viajes desarrollado con workflow frontend moderno**

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg)](https://github.com)
[![WCAG 2.0 AA](https://img.shields.io/badge/WCAG%202.0-AA-blue.svg)](https://www.w3.org/WAI/WCAG21/quickref/?levels=aaa)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## 🚀 Demo en Vivo

**[Ver Sitio Web](https://tu-sitio.netlify.app)** ← *Próximamente disponible*

## ✨ Características Principales

- 📱 **Completamente Responsive** - Adaptado para móviles, tablets y desktop
- ⚡ **Workflow Moderno** - Parcel bundler + PostCSS + Babel
- ♿ **Accesible** - Cumple estándares WCAG 2.0 AA
- 🎨 **Animaciones Fluidas** - AOS (Animate On Scroll)
- 🔍 **Búsqueda Inteligente** - Filtros en tiempo real
- 🌐 **HTML5 Semántico** - Estructura clara y SEO optimizada
- 🎯 **Performance Optimizada** - Build optimizado para producción

## 🛠️ Tecnologías Utilizadas

### Frontend
- **HTML5** - Estructura semántica
- **CSS3** - Variables, Grid, Flexbox + PostCSS
- **JavaScript ES6+** - Clases, módulos, async/await

### Build Tools
- **Parcel 2** - Zero-config bundler
- **PostCSS** - CSS preprocessing con nested syntax
- **Babel** - JavaScript transpilation

### Dependencias
- **AOS 2.3.4** - Animaciones on scroll
- **Swiper 11.0.5** - Carousels modernos

## 📦 Instalación y Uso

### 1. Clonar el repositorio
```bash
git clone https://github.com/tu-usuario/viaje-mundo.git
cd viaje-mundo
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Desarrollo
```bash
npm run dev
# Abre http://localhost:1234
```

### 4. Build de producción
```bash
npm run build
# Archivos optimizados en /dist
```

### 5. Limpiar build
```bash
npm run clean
```

## 🗂️ Estructura del Proyecto

```
├── src/
│   ├── index.html              # 🏠 Página principal
│   ├── categoria.html          # 📋 Lista de destinos con búsqueda
│   ├── det1.html              # 🗼 Detalle París
│   ├── det2.html              # 🏯 Detalle Tokyo  
│   ├── links.html             # 🔗 Fuentes y atribuciones
│   ├── css/
│   │   └── main.css           # 🎨 Estilos principales
│   ├── js/
│   │   └── main.js            # ⚡ JavaScript modular
│   └── images/                # 🖼️ Assets optimizados
├── dist/                      # 📦 Build de producción
├── package.json               # 📄 Configuración NPM
├── postcss.config.js          # ⚙️ Config PostCSS
└── .gitignore                 # 🚫 Archivos ignorados
```

## 🌐 Páginas y URLs

| Página | URL | Descripción |
|--------|-----|-------------|
| 🏠 Home | `/` | Página principal con hero y destinos destacados |
| 📋 Categorías | `/categoria` | Lista completa con búsqueda y filtros |
| 🗼 París | `/det1` | Galería, info práctica y videos |
| 🏯 Tokyo | `/det2` | Galería, info práctica y videos |
| 🔗 Enlaces | `/links` | Fuentes y atribuciones |

## 🔍 Funcionalidades

### Sistema de Búsqueda
- ✅ Búsqueda en tiempo real por nombre/descripción
- ✅ Filtro por continente (Europa, Asia, América, etc.)
- ✅ Contador de resultados dinámico
- ✅ Mensaje de "sin resultados" con botón reset
- ✅ Accesibilidad completa (teclado + screen readers)

### Responsive Design
- ✅ Mobile First approach
- ✅ Breakpoints: 480px, 768px, 1024px, 1200px
- ✅ Grid layouts adaptativos
- ✅ Imágenes responsive

### Accesibilidad (WCAG 2.0 AA)
- ✅ Contraste de colores compliant
- ✅ Navegación por teclado
- ✅ ARIA labels y roles
- ✅ Skip links
- ✅ Focus visible

## 🚀 Deployment

### Netlify (Recomendado)
1. Conecta tu repositorio de GitHub
2. Build command: `npm run build`
3. Publish directory: `dist`
4. ¡Deploy automático en cada push!

### Otras opciones
- **Vercel**: Zero-config deployment
- **GitHub Pages**: Hosting gratuito
- **Surge.sh**: Deploy rápido

## 📈 Performance

- ⚡ **Build time**: ~5 segundos
- 📦 **Bundle size**: 
  - CSS: ~26KB (minificado)
  - JS: ~23KB (minificado) 
  - HTML: ~76KB total
- 🖼️ **Imágenes**: Optimizadas automáticamente

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una branch (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -m 'Añadir nueva funcionalidad'`)
4. Push a la branch (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

## 👥 Autor

**Tu Nombre** - Desarrollo Frontend Moderno

- GitHub: [@tu-usuario](https://github.com/tu-usuario)
- LinkedIn: [Tu Perfil](https://linkedin.com/in/tu-perfil)

## 🙏 Reconocimientos

- **Imágenes**: Unsplash contributors
- **Iconos**: Material Design Icons  
- **Inspiración**: Sitios de viajes modernos

---

⭐ **¡Dale una estrella si te gustó el proyecto!**