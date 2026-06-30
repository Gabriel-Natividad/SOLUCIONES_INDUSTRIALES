
document.addEventListener('DOMContentLoaded', function() {
    
    AOS.init({
        duration: 800,
        once: true,
        offset: 60,
        easing: 'ease-out-cubic'
    });

    const header = document.getElementById('header');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    const menuToggle = document.getElementById('menuToggle');
    const nav = document.getElementById('nav');

    if (menuToggle && nav) {
        menuToggle.addEventListener('click', function() {
            nav.classList.toggle('open');
            const icon = this.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        });

        document.querySelectorAll('.nav a').forEach(link => {
            link.addEventListener('click', function() {
                nav.classList.remove('open');
                const icon = menuToggle.querySelector('i');
                icon.classList.add('fa-bars');
                icon.classList.remove('fa-times');
            });
        });
    }

    const slides = document.querySelectorAll('.hero-slide');
    if (slides.length > 0) {
        const dots = document.querySelectorAll('.dot');
        const prevBtn = document.getElementById('prevSlide');
        const nextBtn = document.getElementById('nextSlide');
        let currentSlide = 0;
        let slideInterval;

        function goToSlide(index) {
            slides.forEach((slide, i) => {
                slide.classList.toggle('active', i === index);
            });
            dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === index);
            });
            currentSlide = index;
        }

        function nextSlideFn() {
            const next = (currentSlide + 1) % slides.length;
            goToSlide(next);
        }

        function prevSlideFn() {
            const prev = (currentSlide - 1 + slides.length) % slides.length;
            goToSlide(prev);
        }

        if (nextBtn) nextBtn.addEventListener('click', function() { nextSlideFn(); resetInterval(); });
        if (prevBtn) prevBtn.addEventListener('click', function() { prevSlideFn(); resetInterval(); });

        dots.forEach((dot, index) => {
            dot.addEventListener('click', function() {
                goToSlide(index);
                resetInterval();
            });
        });

        function startInterval() {
            slideInterval = setInterval(nextSlideFn, 5000);
        }

        function resetInterval() {
            clearInterval(slideInterval);
            startInterval();
        }

        startInterval();
    }

    const statNumbers = document.querySelectorAll('.stat-number');
    if (statNumbers.length > 0) {
        let countersStarted = false;

        function animateCounters() {
            if (countersStarted) return;
            const parallaxSection = document.querySelector('.parallax-section');
            if (!parallaxSection) return;
            
            const rect = parallaxSection.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                countersStarted = true;
                statNumbers.forEach(stat => {
                    const target = parseInt(stat.getAttribute('data-target'));
                    let current = 0;
                    const increment = target / 50;
                    const updateCounter = () => {
                        current += increment;
                        if (current < target) {
                            stat.textContent = Math.round(current);
                            requestAnimationFrame(updateCounter);
                        } else {
                            stat.textContent = target + '+';
                        }
                    };
                    updateCounter();
                });
            }
        }

        window.addEventListener('scroll', animateCounters);
        setTimeout(animateCounters, 500);
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
            }
        });
    });

    console.log('🚀 Soluciones Industriales y Petroleras Magaña');
});