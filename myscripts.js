document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. SCROLL REVEAL ANIMATION ---
    // This adds a 'visible' class to elements when they enter the viewport
    const revealElements = document.querySelectorAll('.card, .intro h1, .intro h3, .intro p');
    
    const revealOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
                observer.unobserve(entry.target); // Stop watching once animated
            }
        });
    }, { threshold: 0.1 });

    revealElements.forEach(el => {
        // Set initial state via JS so it doesn't break if JS is disabled
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";
        el.style.transition = "all 0.8s ease-out";
        revealOnScroll.observe(el);
    });


    // --- 2. SMOOTH SCROLLING FOR NAV LINKS ---
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            // Only apply if it's an internal anchor link
            if (link.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                document.querySelector(targetId).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // --- 3. MOUSE MOVE PARALLAX FOR BACKGROUND ---
    // Subtle movement of the background image based on mouse position
    const bg = document.querySelector('.image-background');
    document.addEventListener('mousemove', (e) => {
        const moveX = (e.clientX * -0.05) / 8;
        const moveY = (e.clientY * -0.05) / 8;
        bg.style.transform = `scale(1.1) translate(${moveX}px, ${moveY}px)`;
    });

});