// ===================================================
//  Anubhav Shakya — Portfolio JavaScript
// ===================================================

(function () {
    'use strict';

    // ===== Particles Background =====
    function createParticles() {
        const container = document.getElementById('particles');
        if (!container) return;

        const count = 30;
        for (let i = 0; i < count; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            particle.style.left = Math.random() * 100 + '%';
            const size = Math.random() * 4 + 2;
            particle.style.width = size + 'px';
            particle.style.height = size + 'px';
            particle.style.animationDuration = (Math.random() * 15 + 10) + 's';
            particle.style.animationDelay = (Math.random() * 10) + 's';
            particle.style.opacity = (Math.random() * 0.3 + 0.1).toString();
            container.appendChild(particle);
        }
    }

    // ===== Navbar Scroll Effect =====
    function initNavbarScroll() {
        const nav = document.getElementById('navbar');
        if (!nav) return;

        window.addEventListener('scroll', function () {
            if (window.scrollY > 50) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }
        });
    }

    // ===== Mobile Menu Toggle =====
    window.toggleMenu = function () {
        const navLinks = document.getElementById('navLinks');
        const hamburger = document.getElementById('hamburger');
        if (navLinks) navLinks.classList.toggle('active');
        if (hamburger) hamburger.classList.toggle('active');
    };

    function initMobileMenuClose() {
        document.querySelectorAll('.nav-links a').forEach(function (link) {
            link.addEventListener('click', function () {
                var navLinks = document.getElementById('navLinks');
                var hamburger = document.getElementById('hamburger');
                if (navLinks) navLinks.classList.remove('active');
                if (hamburger) hamburger.classList.remove('active');
            });
        });
    }

    // ===== Scroll Reveal (Intersection Observer) =====
    function initScrollReveal() {
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        document.querySelectorAll('.fade-in').forEach(function (el) {
            observer.observe(el);
        });
    }

    // ===== Smooth Scroll for Anchor Links =====
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                var targetId = this.getAttribute('href');
                var target = document.querySelector(targetId);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });
    }

    // ===== Active Navigation Highlight =====
    function initActiveNavHighlight() {
        var sections = document.querySelectorAll('section[id]');
        var navLinks = document.querySelectorAll('.nav-links a');

        window.addEventListener('scroll', function () {
            var current = '';
            sections.forEach(function (section) {
                var sectionTop = section.offsetTop - 120;
                if (window.scrollY >= sectionTop) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(function (link) {
                link.classList.remove('active');
                if (link.getAttribute('href') === '#' + current) {
                    link.classList.add('active');
                }
            });
        });
    }

    // ===== Typing Effect for Hero Badge =====
    function initTypingEffect() {
        var roles = [
            'AI & ML Professional',
            'Agentic AI Developer',
            'Data Scientist',
            'M.Sc. AI Student @ DCU'
        ];
        var roleIndex = 0;
        var charIndex = 0;
        var isDeleting = false;
        var badge = document.getElementById('typingBadge');

        if (!badge) return;

        function typeRole() {
            var currentRole = roles[roleIndex];
            if (isDeleting) {
                charIndex--;
            } else {
                charIndex++;
            }

            badge.textContent = '🚀 ' + currentRole.substring(0, charIndex);

            var speed = isDeleting ? 40 : 80;

            if (!isDeleting && charIndex === currentRole.length) {
                speed = 2200;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                roleIndex = (roleIndex + 1) % roles.length;
                speed = 500;
            }

            setTimeout(typeRole, speed);
        }

        setTimeout(typeRole, 2000);
    }

    // ===== Contact Form Handler =====
    function initContactForm() {
        var form = document.getElementById('contactForm');
        if (!form) return;

        form.addEventListener('submit', function (e) {
            e.preventDefault();
            var btn = form.querySelector('button[type="submit"]');
            if (!btn) return;

            var originalText = btn.innerHTML;
            btn.innerHTML = '✅ Message Sent!';
            btn.style.background = 'linear-gradient(135deg, #00c853, #00bfa5)';
            btn.disabled = true;

            setTimeout(function () {
                btn.innerHTML = originalText;
                btn.style.background = '';
                btn.disabled = false;
                form.reset();
            }, 3000);
        });
    }

    // ===== Counter Animation =====
    function initCounterAnimation() {
        var counters = document.querySelectorAll('.stat-number');
        var observed = false;

        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting && !observed) {
                    observed = true;
                    counters.forEach(function (counter) {
                        var text = counter.textContent.trim();
                        var match = text.match(/^(\d+)/);
                        if (match) {
                            var target = parseInt(match[1], 10);
                            var suffix = text.replace(match[1], '');
                            var current = 0;
                            var step = Math.max(1, Math.floor(target / 40));
                            var interval = setInterval(function () {
                                current += step;
                                if (current >= target) {
                                    current = target;
                                    clearInterval(interval);
                                }
                                counter.textContent = current + suffix;
                            }, 40);
                        }
                    });
                }
            });
        }, { threshold: 0.3 });

        var statsSection = document.querySelector('.hero-stats');
        if (statsSection) observer.observe(statsSection);
    }

    // ===== Console Easter Egg =====
    function logEasterEgg() {
        console.log(
            '%c👋 Hello, curious developer!',
            'color: #6c63ff; font-size: 16px; font-weight: bold;'
        );
        console.log(
            '%c🚀 Built by Anubhav Shakya — AI/ML Professional | M.Sc. AI @ DCU',
            'color: #00d2ff; font-size: 14px;'
        );
        console.log(
            '%c🐙 GitHub: https://github.com/anubhavshakyaaa',
            'color: #b0b0d0; font-size: 12px;'
        );
    }

    // ===== Initialize Everything on DOMContentLoaded =====
    document.addEventListener('DOMContentLoaded', function () {
        createParticles();
        initNavbarScroll();
        initMobileMenuClose();
        initScrollReveal();
        initSmoothScroll();
        initActiveNavHighlight();
        initTypingEffect();
        // initContactForm();
        initCounterAnimation();
        logEasterEgg();
    });

})();