document.getElementById("year").textContent = new Date().getFullYear()

// SCRIPT PARA EL MENÚ HAMBURGUESA DROPDOWN
const navToggle = document.getElementById('nav__toggle');
const navList = document.getElementById('nav__list');

if (navToggle && navList) {
    navToggle.addEventListener('click', () => {
        navList.classList.toggle('open');
        // Cambiar el icono (hamburguesa <-> X)
        const icon = navToggle.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    });

    // Cerrar el menú al hacer clic en un enlace
    navList.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navList.classList.remove('open');
            // Asegurarse de que el ícono vuelva a ser la hamburguesa
            const icon = navToggle.querySelector('i');
            icon.classList.add('fa-bars');
            icon.classList.remove('fa-times');
        });
    });
}

// SMOOTH SCROLL PARA NAVEGACIÓN
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// HEADER SCROLL EFFECT (SOLO EN DESKTOP)
window.addEventListener('scroll', () => {
    // Detectar si estamos en un ancho mayor a 600px (37.5em)
    if (window.innerWidth > 600) { 
        const header = document.querySelector('.header');
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
});

// INTERSECTION OBSERVER PARA ANIMACIONES
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            // Agregar delay progresivo para elementos tech
            if (entry.target.classList.contains('fade-in-tech')) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 100);
            } else {
                entry.target.classList.add('visible');
            }
        }
    });
}, observerOptions);

// Observar todos los elementos con animación
document.querySelectorAll('.fade-in-section, .fade-in-left, .fade-in-right, .fade-in-up, .fade-in-tech, .fade-in-project').forEach(el => {
    observer.observe(el);
});

// EFECTO PARALLAX SUTIL EN HERO
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroContent = document.querySelector('.hero-content-wrapper');
    if (heroContent) {
        heroContent.style.transform = `translateY(${scrolled * 0.1}px)`;
    }
});

// MICRO-ANIMACIONES EN HOVER PARA BOTONES
document.querySelectorAll('.cta-btn').forEach(btn => {
    btn.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px) scale(1.02)';
    });
    
    btn.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// EFECTO HOVER PARA CARDS DE PROYECTOS
document.querySelectorAll('.thumbnail').forEach(thumbnail => {
    thumbnail.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.02)';
        this.style.boxShadow = '0 15px 30px rgba(0,0,0,0.6)';
    });
    
    thumbnail.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
        this.style.boxShadow = '';
    });
});

// BOTÓN VOLVER ARRIBA - Mostrar/ocultar según scroll
document.addEventListener('DOMContentLoaded', function() {
    const backToTopBtn = document.querySelector('.back-to-top');
    
    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
        });
    }
});

// INICIALIZACIÓN DE PARTICLES.JS CON LA CONFIGURACIÓN (Dorado sobre Negro)
particlesJS('particles-js', {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 800 } },
    color: { value: '#FAD207' }, // Dorado
    shape: { type: 'circle', stroke: { width: 0, color: '#000000' } },
    opacity: { value: 0.5, random: false, anim: { enable: false } },
    size: { value: 3, random: true, anim: { enable: false } },
    line_linked: { enable: true, distance: 150, color: '#FAD207', opacity: 0.4, width: 1 },
    move: { enable: true, speed: 2, direction: 'none', random: false, straight: false, out_mode: 'out', bounce: false, attract: { enable: false, rotateX: 600, rotateY: 1200 } }
  },
  interactivity: {
    detect_on: 'canvas',
    events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' }, resize: true },
    modes: { repulse: { distance: 100, duration: 0.4 }, push: { particles_number: 4 } }
  },
  retina_detect: true
});

// VANILLA TILT INITIALIZATION
VanillaTilt.init(document.querySelectorAll("[data-tilt]"), {
    max: 10,
    speed: 1000,
    glare: true,
    "max-glare": 0.1,
});