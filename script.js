// ========================================
// COMIC BOOK STORE - INTERACTIVITY
// ========================================

document.addEventListener('DOMContentLoaded', function () {
    // Mobile Menu Toggle
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');

    if (hamburger) {
        hamburger.addEventListener('click', function () {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Close menu when clicking a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Theme Toggle
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = document.querySelector('.theme-icon');
    let isDark = true;

    if (themeToggle) {
        themeToggle.addEventListener('click', function () {
            isDark = !isDark;
            themeIcon.textContent = isDark ? '☀️' : '🌙';

            // Toggle light mode class on body
            document.body.classList.toggle('light-mode');
        });
    }

    // Cart functionality (simple demo)
    const cartBtn = document.querySelector('.cart-btn');
    const cartCount = document.querySelector('.cart-count');
    let count = 0;

    // Add to cart on comic card click
    document.querySelectorAll('.comic-card, .merch-card').forEach(card => {
        card.addEventListener('click', function (e) {
            if (!e.target.closest('a')) {
                count++;
                cartCount.textContent = count;

                // Visual feedback
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = '';
                }, 200);

                // Cart bounce animation
                cartBtn.style.animation = 'none';
                setTimeout(() => {
                    cartBtn.style.animation = 'cartBounce 0.5s ease';
                }, 10);
            }
        });
    });

    // Smooth scroll behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Parallax effect for hero collage on scroll
    window.addEventListener('scroll', function () {
        const scrolled = window.pageYOffset;
        const heroCollage = document.querySelector('.hero-collage');

        if (heroCollage && scrolled < window.innerHeight) {
            heroCollage.style.transform = `translateY(${scrolled * 0.3}px)`;
        }
    });

    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe sections for animation
    document.querySelectorAll('.comic-card, .merch-card, .pricing-card, .blog-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Pricing card interactions
    document.querySelectorAll('.plan-button').forEach(btn => {
        btn.addEventListener('click', function () {
            const planName = this.closest('.pricing-card').querySelector('.plan-name').textContent;
            alert(`You selected the ${planName} plan! In a real store, this would redirect to checkout.`);
        });
    });

    // CTA button interaction
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function () {
            const catalogSection = document.getElementById('catalog');
            if (catalogSection) {
                catalogSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    // Add cart bounce animation to CSS dynamically
    if (!document.querySelector('#cartAnimation')) {
        const style = document.createElement('style');
        style.id = 'cartAnimation';
        style.textContent = `
            @keyframes cartBounce {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-10px); }
            }
        `;
        document.head.appendChild(style);
    }
});
