# Viaje Mundo - Portal de Viajes

Un sitio web moderno y responsive sobre viajes por el mundo, desarrollado con un workflow de frontend moderno que cumple con los estándares de accesibilidad WCAG 2.0 AA.

## 🌍 Descripción del Proyecto

Viaje Mundo es una práctica de desarrollo frontend que demuestra el uso de herramientas modernas de desarrollo web para crear un sitio responsive y accesible sobre destinos de viaje por el mundo.

### Temática: Viajes por el Mundo
- **Portada**: Presentación del contenido con enlaces a destinos
- **Categoría de Destinos**: Listado de lugares turísticos con imágenes destacadas
- **Páginas de Detalle**: París y Tokio con información completa, galería de imágenes y videos
- **Enlaces y Fuentes**: Documentación transparente de todas las fuentes utilizadas

## 🛠️ Tecnologías y Herramientas

### Build Tools y Workflow Moderno
- **Parcel** - Bundler de aplicaciones web sin configuración
- **PostCSS** - Herramienta de transformación CSS (nested syntax, autoprefixer)
- **Babel** - Transpilador de JavaScript ES6+ para compatibilidad con navegadores antiguos

### Dependencias Externas
- **AOS (Animate On Scroll)** - Librería de animaciones al hacer scroll
- **Swiper** - Carrusel táctil moderno (implementación base preparada)

### Estándares y Accesibilidad
- **WCAG 2.0 AA** - Cumplimiento completo de pautas de accesibilidad
- **HTML5 semántico** - Estructura semántica correcta
- **WAI-ARIA** - Atributos de accesibilidad para screen readers
- **Responsive Design** - Compatible con móviles, tablets y desktop

## 📁 Estructura del Proyecto

```
viajes-mundo/
├── src/
│   ├── index.html          # Portada
│   ├── categoria.html      # Listado de destinos (/categoria)
│   ├── det1.html          # París, Francia (/det1)
│   ├── det2.html          # Tokio, Japón (/det2)
│   ├── links.html         # Enlaces y fuentes (/links)
│   ├── css/
│   │   └── main.css       # Estilos CSS con variables y PostCSS
│   ├── js/
│   │   └── main.js        # JavaScript moderno ES6+
│   └── images/
│       └── README.md      # Documentación de imágenes
├── package.json           # Dependencias y scripts
├── .gitignore            # Archivos excluidos del control de versiones
└── README.md             # Este archivo
```

## 🚀 Instalación y Uso

### Prerequisitos
- Node.js (versión 14 o superior)
- npm o yarn

### Instalación
```bash
# Clonar el repositorio
git clone [URL-del-repositorio]
cd viajes-mundo

# Instalar dependencias
npm install
```

### Scripts Disponibles

```bash
# Desarrollo - Servidor local con hot reload
npm run dev

# Build para producción
npm run build

# Limpiar archivos de build
npm run clean

# Previsualizar build de producción
npm run preview
```

### URLs del Sitio
- **Portada**: `/` (index.html)
- **Destinos**: `/categoria` (categoria.html)
- **París**: `/det1` (det1.html)
- **Tokio**: `/det2` (det2.html)
- **Enlaces**: `/links` (links.html)

## 🎨 Características del Diseño

### Responsive Design
- **Mobile First**: Diseñado primero para móviles
- **Breakpoints**: 480px, 768px, 1200px
- **Grids CSS**: Layout flexible con CSS Grid y Flexbox
- **Imágenes Responsivas**: Optimizadas para diferentes tamaños de pantalla

### Accesibilidad (WCAG 2.0 AA)
- **Skip Links**: Enlaces de salto para navegación por teclado
- **Alt Text**: Textos alternativos descriptivos para todas las imágenes
- **Contraste**: Colores con contraste mínimo AA
- **Keyboard Navigation**: Navegación completa por teclado
- **Screen Reader**: Compatible con lectores de pantalla
- **Semantic HTML**: Uso correcto de elementos semánticos
- **ARIA Labels**: Atributos ARIA donde es necesario

### Interactividad
- **Navegación Móvil**: Menú hamburguesa responsive
- **Animaciones**: Smooth scroll y animaciones AOS
- **Estados de Hover/Focus**: Feedback visual mejorado
- **Progressive Enhancement**: Funcionalidad básica sin JavaScript

## 🌟 Funcionalidades Implementadas

### JavaScript Moderno
- **ES6+ Modules**: Importación de módulos
- **Classes**: Programación orientada a objetos
- **Async/Await**: Para cargas asíncronas
- **DOM Manipulation**: Interacción moderna con el DOM
- **Event Delegation**: Gestión eficiente de eventos
- **Intersection Observer**: Para lazy loading y animaciones

### CSS Avanzado
- **Custom Properties**: Variables CSS nativas
- **PostCSS Nested**: Sintaxis anidada
- **Flexbox y Grid**: Layouts modernos
- **Clamp()**: Tipografía fluida
- **Media Queries**: Diseño responsive
- **Pseudo-elementos**: Efectos visuales avanzados

## 📱 Compatibilidad

### Navegadores Soportados
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Móviles: iOS 14+, Android 8+

### Navegadores Antiguos
El código JavaScript ES6+ es transpilado automáticamente por Babel para compatibilidad con navegadores más antiguos según la configuración en `browserslist`.

## 🎯 Objetivos Cumplidos

✅ **Diseño y ejecución de sitio web responsive**  
✅ **Uso de inspector DOM y herramientas de desarrollo**  
✅ **Workflow de desarrollo moderno con entornos diferenciados**  
✅ **Código moderno transpilado para navegadores antiguos**  
✅ **Utilización de boilerplate custom desde cero**  
✅ **Integración de dependencias externas de npm**  
✅ **Uso de pre/postprocesadores (PostCSS)**  
✅ **Control de versiones con Git**  
✅ **Cumplimiento WCAG 2.0 AA**  
✅ **Interactividad JavaScript moderna**  
✅ **Estructura semántica correcta**  

## 📄 Documentación de Fuentes

Todas las fuentes de información, imágenes y recursos utilizados están documentadas en la página `/links` del sitio web, cumpliendo con los requisitos de transparencia y derechos de autor.

## 🚢 Despliegue

El proyecto está preparado para despliegue continuo en servicios como:
- **Netlify** (recomendado)
- **Vercel**
- **GitHub Pages**
- **Surge.sh**

### Build para Producción
```bash
npm run build
```

Los archivos optimizados se generan en la carpeta `dist/` lista para subir a cualquier servidor web.

## 👨‍💻 Desarrollo

### Añadir Nuevos Destinos
1. Crear nueva página HTML en `/src`
2. Añadir imágenes en `/src/images`
3. Actualizar navegación en todas las páginas
4. Documentar fuentes en `links.html`

### Modificar Estilos
Los estilos están organizados con variables CSS en `src/css/main.css` usando sintaxis PostCSS nested.

### Añadir JavaScript
El archivo `src/js/main.js` está estructurado con clases ES6+ y listo para extensión.

## 📞 Contacto

Para consultas sobre el proyecto:
- **Email**: info@viajemundo.com
- **Ubicación**: Madrid, España

---

**Nota**: Este es un proyecto educativo desarrollado para demostrar técnicas modernas de desarrollo frontend. No tiene fines comerciales.

## 📝 Licencia

Este proyecto fue creado con fines educativos. Todas las fuentes y atribuciones están documentadas en `/links`.
Un sitio web moderno y accesible sobre viajes por el mundo, desarrollado como práctica de frontend moderno.

## 📋 Descripción del proyecto

Viaje Mundo es un portal de viajes que presenta destinos fascinantes alrededor del mundo, con un enfoque especial en la experiencia del usuario y la accesibilidad. El sitio combina información detallada sobre destinos turísticos con una interfaz moderna y responsive.

### ✨ Características principales

- **Diseño responsive** compatible con móviles, tablets y escritorio
- **Accesibilidad WCAG 2.0 AA** con navegación por teclado y lectores de pantalla
- **Workflow moderno** con Parcel, PostCSS y Babel
- **Interactividad** con JavaScript ES6+ compilado para navegadores antiguos
- **Contenido multimedia** incluyendo videos de YouTube e imágenes optimizadas
- **SEO optimizado** con metadatos y structured data

## 🛠️ Tecnologías utilizadas

### Frontend
- **HTML5** semántico y accesible
- **CSS3** con variables CSS y PostCSS
- **JavaScript ES6+** con funcionalidades modernas
- **PostCSS** para nested CSS y autoprefixer
- **Babel** para compatibilidad con navegadores antiguos

### Build Tools
- **Parcel** - Bundler de aplicaciones web
- **PostCSS** - Procesador CSS
- **Babel** - Compilador JavaScript
- **npm** - Gestión de dependencias

### Dependencias externas
- **AOS (Animate On Scroll)** - Animaciones al hacer scroll
- **Swiper** - Carrusel táctil moderno

### Herramientas de desarrollo
- **Git** - Control de versiones
- **GitHub** - Repositorio remoto y deployment
- **npm scripts** - Automatización de tareas

## 📁 Estructura del proyecto

```
viajes-mundo/
├── src/
│   ├── css/
│   │   └── main.css           # Estilos principales
│   ├── js/
│   │   └── main.js            # JavaScript principal
│   ├── images/
│   │   ├── README.md          # Documentación de imágenes
│   │   └── [imágenes]         # Archivos de imagen
│   ├── index.html             # Página principal (/)
│   ├── categoria.html         # Página de destinos (/categoria)
│   ├── det1.html              # Detalle París (/det1)
│   ├── det2.html              # Detalle Tokio (/det2)
│   └── links.html             # Enlaces y fuentes (/links)
├── dist/                      # Build de producción (generado)
├── .parcel-cache/             # Cache de Parcel (generado)
├── node_modules/              # Dependencias npm (generado)
├── package.json               # Configuración del proyecto
├── postcss.config.js          # Configuración PostCSS
├── .babelrc                   # Configuración Babel
├── .gitignore                 # Archivos ignorados por Git
└── README.md                  # Este archivo
```

## 🚀 Instalación y uso

### Requisitos previos
- Node.js (v14 o superior)
- npm (v6 o superior)
- Git

### Instalación

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/usuario/viajes-mundo.git
   cd viajes-mundo
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

### Comandos disponibles

- **Desarrollo:**
  ```bash
  npm run dev
  ```
  Inicia el servidor de desarrollo en `http://localhost:1234`

- **Build de producción:**
  ```bash
  npm run build
  ```
  Genera los archivos optimizados en `/dist`

- **Limpiar cache:**
  ```bash
  npm run clean
  ```
  Elimina cache y archivos temporales

- **Preview de producción:**
  ```bash
  npm run preview
  ```
  Sirve la versión de producción localmente

## 📄 Páginas del sitio

### Estructura de URLs

- **Portada:** `/` - Página principal con introducción y destinos destacados
- **Destinos:** `/categoria` - Lista completa de destinos disponibles  
- **París:** `/det1` - Guía completa de París, Francia
- **Tokio:** `/det2` - Guía completa de Tokio, Japón
- **Enlaces:** `/links` - Fuentes, atribuciones y recursos utilizados

### Contenido de páginas

#### Página principal (/)
- Hero section con call-to-action
- Introducción a Viaje Mundo
- Destinos destacados con preview
- Sección "¿Por qué elegir Viaje Mundo?"

#### Página de categoría (/categoria)
- Lista de todos los destinos
- Filtros por continente
- Información práctica de cada destino
- Destinos actuales y próximamente

#### Páginas de detalle (/det1, /det2)
- Imagen principal del destino
- 3 párrafos descriptivos mínimo
- 3 imágenes en galería
- 1 video de YouTube embebido
- Información práctica en sidebar
- Navegación entre destinos

#### Página de enlaces (/links)
- Fuentes de información utilizadas
- Créditos de imágenes y multimedia
- Herramientas y tecnologías
- Información de derechos de autor

## ♿ Accesibilidad

El sitio cumple con las pautas WCAG 2.0 AA:

### Características implementadas:
- **Navegación por teclado** completa
- **Skip links** para saltar al contenido principal
- **Textos alternativos** en todas las imágenes
- **Contraste de colores** mínimo AA
- **Marcado semántico** con HTML5
- **ARIA labels** donde sea necesario
- **Títulos de página** descriptivos
- **Estructura de encabezados** lógica
- **Idioma especificado** correctamente
- **Focus visible** mejorado para navegación por teclado

### Tecnologías de asistencia soportadas:
- Lectores de pantalla (NVDA, JAWS, VoiceOver)
- Navegación por teclado
- Software de reconocimiento de voz
- Ampliadores de pantalla

## 📱 Responsive Design

### Breakpoints utilizados:
- **Mobile:** < 480px
- **Tablet:** 480px - 768px  
- **Desktop:** 768px - 1200px
- **Large Desktop:** > 1200px

### Características responsive:
- Grid layouts que se adaptan automáticamente
- Tipografía fluida con clamp()
- Imágenes responsivas con múltiples resoluciones
- Navegación móvil con menú hamburguesa
- Touch-friendly para dispositivos táctiles

## 🎨 Diseño y UX

### Paleta de colores:
- **Primary:** #2c5aa0 (azul profesional)
- **Secondary:** #f4a261 (naranja cálido)  
- **Accent:** #e76f51 (rojo coral)
- **Background:** #ffffff (blanco)
- **Surface:** #f8f9fa (gris muy claro)

### Tipografía:
- **Principal:** Segoe UI, Tahoma, Geneva, Verdana, sans-serif
- **Encabezados:** Georgia, serif
- **Tamaños:** Sistema escalable con CSS custom properties

### Principios de diseño:
- **Jerarquía visual** clara con tipografía y espaciado
- **Consistencia** en componentes y patrones
- **Feedback visual** para interacciones
- **Performance** optimizado para carga rápida

## 🔍 SEO

### Optimizaciones implementadas:
- Meta tags descriptivos en todas las páginas
- Open Graph para redes sociales
- Twitter Cards para mejor compartición
- URLs semánticas y descriptivas
- Sitemap XML (a implementar)
- Robots.txt (a implementar)

## 🚀 Deployment

### Opciones de despliegue:

1. **GitHub Pages:**
   - Automático desde la rama main
   - Build con GitHub Actions

2. **Netlify:**
   - Deploy continuo desde Git
   - Configuración automática

3. **Vercel:**
   - Deploy automático con configuración zero-config
   - CDN global integrado

### Configuración de producción:
- Archivos minificados y optimizados
- Imágenes comprimidas
- CSS y JS concatenados
- Cache headers optimizados

## 📝 Desarrollo

### Flujo de desarrollo:
1. Crear rama para nueva funcionalidad
2. Desarrollar con `npm run dev`
3. Testear en múltiples dispositivos
4. Validar accesibilidad
5. Build de producción
6. Deploy automático

### Buenas prácticas seguidas:
- **Código semántico** y bien documentado
- **Commits descriptivos** siguiendo convenciones
- **Mobile-first** approach en CSS
- **Progressive enhancement** en JavaScript
- **Performance budget** respetado

## 🔧 Mantenimiento

### Actualizaciones recomendadas:
- Dependencias npm mensualmente
- Contenido de destinos regularmente  
- Imágenes optimizadas según necesidad
- Tests de accesibilidad periódicos

### Monitoring:
- Google Analytics (a implementar)
- Lighthouse CI para performance
- WAVE para accesibilidad
- GTMetrix para velocidad

## 🤝 Contribución

Este proyecto es una práctica educativa, pero se agradecen sugerencias para:
- Mejoras de accesibilidad
- Optimizaciones de performance
- Nuevos destinos para añadir
- Correcciones de bugs

## 📄 Licencia

Proyecto educativo bajo licencia MIT. Ver archivo `LICENSE` para más detalles.

## 👥 Autor

**Viaje Mundo** - Práctica de desarrollo frontend moderno  
Universidad: [Nombre de la universidad]  
Asignatura: Desarrollo Frontend  
Año académico: 2024

## 🔗 Enlaces útiles

- [Documentación Parcel](https://parceljs.org/)
- [PostCSS Plugins](https://postcss.org/)
- [WCAG 2.0 Guidelines](http://www.sidar.org/traducciones/wcag20/es/)
- [AOS Library](https://michalsnik.github.io/aos/)
- [Swiper Documentation](https://swiperjs.com/)

---

**¡Gracias por explorar Viaje Mundo!** 🌍✈️