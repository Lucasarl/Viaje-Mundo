// Importar dependencias externas
import AOS from 'aos';
import 'aos/dist/aos.css';

// Configurar Swiper como variable global para evitar problemas de importación
// En un entorno de producción real, se importaría correctamente desde CDN o package
let Swiper = null;

// Clase principal para manejar la funcionalidad del sitio
class ViajeMundo {
  constructor() {
    this.init();
  }

  // Inicializar todas las funcionalidades
  init() {
    this.setupEventListeners();
    this.initializeAOS();
    this.initializeSwiper();
    this.setupMenuToggle();
    this.setupScrollEffects();
    this.setupImageLazyLoading();
    this.setupAccessibilityEnhancements();
    this.setupSearchAndFilters();
  }

  // Event listeners principales
  setupEventListeners() {
    // Eventos que se ejecutan cuando el DOM está listo
    document.addEventListener('DOMContentLoaded', () => {
      console.log('🌍 Viaje Mundo - Sitio web cargado correctamente');
      this.highlightCurrentPage();
    });

    // Eventos de scroll
    window.addEventListener('scroll', this.throttle(this.handleScroll.bind(this), 100));
    
    // Eventos de resize
    window.addEventListener('resize', this.debounce(this.handleResize.bind(this), 250));
  }

  // Inicializar animaciones AOS
  initializeAOS() {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 100
    });
  }

  // Inicializar Swiper para carruseles
  initializeSwiper() {
    // Solo inicializar si Swiper está disponible
    if (typeof Swiper === 'undefined' || !Swiper) {
      console.log('💡 Swiper no está disponible - carruseles deshabilitados');
      return;
    }
    
    const swiperElements = document.querySelectorAll('.swiper');
    
    swiperElements.forEach(element => {
      new Swiper(element, {
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        pagination: {
          el: element.querySelector('.swiper-pagination'),
          clickable: true,
        },
        navigation: {
          nextEl: element.querySelector('.swiper-button-next'),
          prevEl: element.querySelector('.swiper-button-prev'),
        },
        breakpoints: {
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }
      });
    });
  }

  // Configurar menu toggle para móvil
  setupMenuToggle() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav');
    const navLinks = document.querySelectorAll('.nav a');

    if (menuToggle && nav) {
      menuToggle.addEventListener('click', () => {
        nav.classList.toggle('nav-open');
        menuToggle.classList.toggle('active');
        
        // Actualizar aria-expanded para accesibilidad
        const expanded = nav.classList.contains('nav-open');
        menuToggle.setAttribute('aria-expanded', expanded);
        
        // Cambiar icono del menu
        const icon = menuToggle.querySelector('i') || menuToggle;
        if (expanded) {
          icon.innerHTML = '✕';
          icon.setAttribute('aria-label', 'Cerrar menú');
        } else {
          icon.innerHTML = '☰';
          icon.setAttribute('aria-label', 'Abrir menú');
        }
      });

      // Cerrar menú al hacer click en un enlace
      navLinks.forEach(link => {
        link.addEventListener('click', () => {
          nav.classList.remove('nav-open');
          menuToggle.classList.remove('active');
          menuToggle.setAttribute('aria-expanded', 'false');
        });
      });

      // Cerrar menú al hacer click fuera
      document.addEventListener('click', (e) => {
        if (!nav.contains(e.target) && !menuToggle.contains(e.target)) {
          nav.classList.remove('nav-open');
          menuToggle.classList.remove('active');
          menuToggle.setAttribute('aria-expanded', 'false');
        }
      });
    }
  }

  // Efectos de scroll
  setupScrollEffects() {
    const header = document.querySelector('.header');
    
    if (header) {
      let lastScrollY = window.scrollY;
      
      window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        // Agregar clase para header con scroll
        if (currentScrollY > 100) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
        
        lastScrollY = currentScrollY;
      });
    }

    // Smooth scroll para enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }

  // Lazy loading para imágenes
  setupImageLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.remove('lazy');
            img.classList.add('loaded');
            observer.unobserve(img);
          }
        });
      });

      images.forEach(img => imageObserver.observe(img));
    } else {
      // Fallback para navegadores sin IntersectionObserver
      images.forEach(img => {
        img.src = img.dataset.src;
        img.classList.remove('lazy');
      });
    }
  }

  // Mejoras de accesibilidad
  setupAccessibilityEnhancements() {
    // Mejorar navegación por teclado
    this.enhanceKeyboardNavigation();
    
    // Configurar skip links
    this.setupSkipLinks();
    
    // Notificaciones para screen readers
    this.setupAriaLive();
  }

  enhanceKeyboardNavigation() {
    // Mejorar el focus visible
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
      }
    });

    document.addEventListener('mousedown', () => {
      document.body.classList.remove('keyboard-navigation');
    });

    // Escape para cerrar modales/menús
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        const openNav = document.querySelector('.nav.nav-open');
        if (openNav) {
          openNav.classList.remove('nav-open');
          const toggle = document.querySelector('.menu-toggle');
          if (toggle) toggle.focus();
        }
      }
    });
  }

  setupSkipLinks() {
    const skipLink = document.querySelector('.skip-link');
    if (skipLink) {
      skipLink.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(skipLink.getAttribute('href'));
        if (target) {
          target.focus();
          target.scrollIntoView();
        }
      });
    }
  }

  setupAriaLive() {
    // Crear región de notificaciones para screen readers
    const liveRegion = document.createElement('div');
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.className = 'sr-only';
    liveRegion.id = 'live-region';
    document.body.appendChild(liveRegion);
  }

  // Notificar cambios a screen readers
  announceToScreenReader(message) {
    const liveRegion = document.getElementById('live-region');
    if (liveRegion) {
      liveRegion.textContent = message;
      
      // Limpiar después de un momento
      setTimeout(() => {
        liveRegion.textContent = '';
      }, 1000);
    }
  }

  // Resaltar página actual en navegación
  highlightCurrentPage() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav a');
    
    navLinks.forEach(link => {
      const linkPath = new URL(link.href).pathname;
      if (linkPath === currentPath || (currentPath === '/' && linkPath.includes('index'))) {
        link.classList.add('active');
        link.setAttribute('aria-current', 'page');
      }
    });
  }

  // Configurar búsqueda y filtros en página de categorías
  setupSearchAndFilters() {
    const searchInput = document.getElementById('search-destinations');
    const continentFilter = document.getElementById('continent-filter');
    const destinationCards = document.querySelectorAll('[data-continent]');

    if (!searchInput || !continentFilter || destinationCards.length === 0) {
      return; // No estamos en la página de categorías
    }

    // Función para filtrar destinos
    const filterDestinations = () => {
      const searchTerm = searchInput.value.toLowerCase().trim();
      const selectedContinent = continentFilter.value.toLowerCase();
      
      let visibleCount = 0;

      destinationCards.forEach(card => {
        const cardText = card.textContent.toLowerCase();
        const cardContinent = card.getAttribute('data-continent');
        
        // Verificar si coincide con la búsqueda de texto
        const matchesSearch = searchTerm === '' || cardText.includes(searchTerm);
        
        // Verificar si coincide con el filtro de continente
        const matchesContinent = selectedContinent === '' || cardContinent === selectedContinent;
        
        // Mostrar u ocultar la tarjeta
        const shouldShow = matchesSearch && matchesContinent;
        
        if (shouldShow) {
          card.style.display = 'block';
          card.style.animation = 'fadeIn 0.3s ease-in';
          visibleCount++;
        } else {
          card.style.display = 'none';
        }
      });

      // Mostrar mensaje si no hay resultados
      this.toggleNoResultsMessage(visibleCount === 0);
      
      // Actualizar contador de resultados
      this.updateResultsCounter(visibleCount, destinationCards.length);
      
      // Anunciar cambios a screen readers
      this.announceSearchResults(visibleCount);
    };

    // Event listeners
    searchInput.addEventListener('input', this.debounce(filterDestinations, 300));
    continentFilter.addEventListener('change', filterDestinations);

    // Botón de limpiar filtros
    const clearButton = document.getElementById('clear-filters');
    if (clearButton) {
      clearButton.addEventListener('click', () => {
        searchInput.value = '';
        continentFilter.value = '';
        filterDestinations();
        searchInput.focus();
      });
    }

    // Limpiar filtros cuando se presiona Escape
    searchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        searchInput.value = '';
        continentFilter.value = '';
        filterDestinations();
        searchInput.blur();
      }
    });

    // Agregar estilos CSS para las animaciones
    this.addSearchStyles();

    // Inicializar contador de resultados
    this.updateResultsCounter(destinationCards.length, destinationCards.length);
  }

  // Mostrar/ocultar mensaje de "no hay resultados"
  toggleNoResultsMessage(show) {
    let noResultsMsg = document.getElementById('no-results-message');
    
    if (show && !noResultsMsg) {
      // Crear mensaje si no existe
      noResultsMsg = document.createElement('div');
      noResultsMsg.id = 'no-results-message';
      noResultsMsg.className = 'no-results';
      noResultsMsg.innerHTML = `
        <div style="text-align: center; padding: var(--spacing-xl); background: var(--surface-color); border-radius: var(--radius-lg); margin: var(--spacing-lg) 0;">
          <div style="font-size: 3rem; margin-bottom: var(--spacing-md);">🔍</div>
          <h3>No se encontraron destinos</h3>
          <p>Prueba con otros términos de búsqueda o selecciona un continente diferente.</p>
          <button id="clear-from-no-results" 
                  style="background: var(--primary-color); color: white; border: none; padding: var(--spacing-sm) var(--spacing-md); border-radius: var(--radius-sm); cursor: pointer; margin-top: var(--spacing-md);">
            Limpiar filtros
          </button>
        </div>
      `;
      
      // Insertar después del grid de tarjetas
      const cardGrid = document.querySelector('.card-grid');
      if (cardGrid) {
        cardGrid.parentNode.insertBefore(noResultsMsg, cardGrid.nextSibling);
      }
      
      // Agregar event listener al botón de limpiar
      const clearFromNoResults = noResultsMsg.querySelector('#clear-from-no-results');
      if (clearFromNoResults) {
        clearFromNoResults.addEventListener('click', () => {
          const searchInput = document.getElementById('search-destinations');
          const continentFilter = document.getElementById('continent-filter');
          if (searchInput) searchInput.value = '';
          if (continentFilter) continentFilter.value = '';
          this.setupSearchAndFilters();
          noResultsMsg.style.display = 'none';
          if (searchInput) searchInput.focus();
        });
      }
    } else if (!show && noResultsMsg) {
      noResultsMsg.style.display = 'none';
    } else if (show && noResultsMsg) {
      noResultsMsg.style.display = 'block';
    }
  }

  // Anunciar resultados de búsqueda a screen readers
  announceSearchResults(count) {
    let message;
    if (count === 0) {
      message = 'No se encontraron destinos que coincidan con tu búsqueda';
    } else if (count === 1) {
      message = 'Se encontró 1 destino';
    } else {
      message = `Se encontraron ${count} destinos`;
    }
    
    this.announceToScreenReader(message);
  }

  // Actualizar contador de resultados
  updateResultsCounter(visible, total) {
    const counter = document.getElementById('search-results-counter');
    if (counter) {
      if (visible === total) {
        counter.innerHTML = `Mostrando los <strong>${total}</strong> destinos disponibles`;
      } else if (visible === 0) {
        counter.innerHTML = `<span style="color: var(--accent-color);">No hay destinos que coincidan con los filtros</span>`;
      } else {
        counter.innerHTML = `Mostrando <strong>${visible}</strong> de <strong>${total}</strong> destinos`;
      }
    }
  }

  // Agregar estilos CSS para las animaciones de búsqueda
  addSearchStyles() {
    if (document.getElementById('search-styles')) return;
    
    const style = document.createElement('style');
    style.id = 'search-styles';
    style.textContent = `
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
      }
      
      @keyframes fadeOut {
        from { opacity: 1; transform: translateY(0); }
        to { opacity: 0; transform: translateY(-10px); }
      }
      
      .card {
        transition: all 0.3s ease;
      }
      
      .card[style*="display: none"] {
        animation: fadeOut 0.3s ease-out;
      }
      
      #search-destinations:focus,
      #continent-filter:focus {
        outline: 2px solid var(--primary-color);
        outline-offset: 2px;
        box-shadow: 0 0 0 3px rgba(44, 90, 160, 0.1);
      }
      
      .no-results {
        animation: fadeIn 0.5s ease-in;
      }
    `;
    
    document.head.appendChild(style);
  }

  // Manejar evento scroll
  handleScroll() {
    const scrolled = window.scrollY > 50;
    document.body.classList.toggle('scrolled', scrolled);
  }

  // Manejar evento resize
  handleResize() {
    // Recalcular Swiper si existe
    const swipers = document.querySelectorAll('.swiper');
    swipers.forEach(swiper => {
      if (swiper.swiper) {
        swiper.swiper.update();
      }
    });
  }

  // Utilidades
  throttle(func, limit) {
    let inThrottle;
    return function() {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  }

  debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  // Método para mostrar notificaciones
  showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Agregar estilos inline básicos
    Object.assign(notification.style, {
      position: 'fixed',
      top: '20px',
      right: '20px',
      padding: '15px 20px',
      borderRadius: '5px',
      color: 'white',
      backgroundColor: type === 'error' ? '#e74c3c' : type === 'success' ? '#27ae60' : '#3498db',
      zIndex: '1000',
      transform: 'translateX(100%)',
      transition: 'transform 0.3s ease'
    });

    document.body.appendChild(notification);

    // Animar entrada
    requestAnimationFrame(() => {
      notification.style.transform = 'translateX(0)';
    });

    // Remover después de 3 segundos
    setTimeout(() => {
      notification.style.transform = 'translateX(100%)';
      setTimeout(() => {
        if (notification.parentNode) {
          notification.parentNode.removeChild(notification);
        }
      }, 300);
    }, 3000);

    // Notificar a screen readers
    this.announceToScreenReader(message);
  }

  // Método para cargar contenido dinámico (ejemplo)
  async loadDynamicContent(url) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Error al cargar contenido');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error:', error);
      this.showNotification('Error al cargar contenido', 'error');
      return null;
    }
  }
}

// Inicializar la aplicación
const app = new ViajeMundo();

// Hacer disponible globalmente para debugging
window.ViajeMundo = app;

// Exportar para uso en otros módulos si es necesario
export default ViajeMundo;