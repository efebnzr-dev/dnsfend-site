document.addEventListener('DOMContentLoaded', function () {

    // ===== Mobile Menu Toggle =====
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const menu = document.querySelector('.menu');

    if (mobileToggle && menu) {
        mobileToggle.addEventListener('click', function () {
            menu.classList.toggle('active');
            this.classList.toggle('active');
        });

        // Close menu when clicking a link
        menu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.remove('active');
                mobileToggle.classList.remove('active');
            });
        });
    }

    // ===== Navbar Scroll Effect =====
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    // ===== Product Tabs =====
    const tabs = document.querySelectorAll('.product-tab');
    const panels = document.querySelectorAll('.product-panel');

    tabs.forEach(tab => {
        tab.addEventListener('click', function () {
            const target = this.getAttribute('data-tab');

            tabs.forEach(t => t.classList.remove('active'));
            panels.forEach(p => p.classList.remove('active'));

            this.classList.add('active');
            const targetPanel = document.getElementById('panel-' + target);
            if (targetPanel) {
                targetPanel.classList.add('active');
            }
        });
    });

    // ===== Animated Statistics Counter =====
    function formatNumberShort(num) {
        if (num >= 1e12) return (num / 1e12).toFixed(0) + 'T';
        if (num >= 1e9) return (num / 1e9).toFixed(0) + 'B';
        if (num >= 1e6) return (num / 1e6).toFixed(1).replace(/\.0$/, '') + 'M';
        if (num >= 1e3) return (num / 1e3).toFixed(0) + 'K';
        return num.toString();
    }

    function animateCounter(el) {
        const target = +el.getAttribute('data-target');
        const duration = 2000;
        let startTime = null;
        let prefix = '';
        let suffix = '';

        if (el.textContent.includes('$')) prefix = '$ ';
        if (el.textContent.includes('%')) suffix = ' %';

        function update(timestamp) {
            if (!startTime) startTime = timestamp;
            const elapsed = timestamp - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
            const current = Math.floor(eased * target);

            if (progress < 1) {
                el.textContent = prefix + formatNumberShort(current) + suffix;
                requestAnimationFrame(update);
            } else {
                el.textContent = prefix + formatNumberShort(target) + suffix;
            }
        }
        requestAnimationFrame(update);
    }

    // ===== Scroll Animation (AOS-like) =====
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    const animationObserver = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = entry.target.getAttribute('data-aos-delay');
                if (delay) {
                    setTimeout(() => {
                        entry.target.classList.add('aos-animate');
                    }, parseInt(delay));
                } else {
                    entry.target.classList.add('aos-animate');
                }
                animationObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('[data-aos]').forEach(el => {
        animationObserver.observe(el);
    });

    // ===== Stats Counter on Scroll =====
    const statsSection = document.querySelector('.stats-section');
    let statsAnimated = false;

    if (statsSection) {
        const statsObserver = new IntersectionObserver(function (entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting && !statsAnimated) {
                    statsAnimated = true;
                    document.querySelectorAll('.stat-number').forEach(animateCounter);
                    statsObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });

        statsObserver.observe(statsSection);
    }

    // ===== Smooth Scroll for Anchor Links =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 0;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ===== Contact Form =====
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', async function (e) {
            e.preventDefault();

            const responseDiv = document.getElementById('response');
            const nameEl = document.getElementById('name');
            const emailEl = document.getElementById('email');
            const messageEl = document.getElementById('message');

            try {
                const response = await fetch('/api/contact', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        name: nameEl ? nameEl.value : '',
                        email: emailEl ? emailEl.value : '',
                        message: messageEl ? messageEl.value : ''
                    })
                });

                const data = await response.json();
                responseDiv.textContent = data.message;
                responseDiv.classList.remove('error');
                responseDiv.classList.add('success');
                contactForm.reset();

                setTimeout(() => {
                    responseDiv.classList.remove('success');
                }, 3000);
            } catch (error) {
                responseDiv.textContent = 'An error occurred. Please try again.';
                responseDiv.classList.remove('success');
                responseDiv.classList.add('error');
            }
        });
    }

});
