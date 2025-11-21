const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.nav-menu');

if (hamburger && menu) {
    hamburger.addEventListener('click', () => {
        menu.classList.toggle('active');
    });
}

// smooth scroll بسيط
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
        const target = document.querySelector(link.getAttribute('href'));
        if (!target) return;

        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
        menu.classList.remove('active');
    });
});

// contact form alert بسيط
const form = document.querySelector('.contact-form');
if (form) {
    form.addEventListener('submit', e => {
        e.preventDefault();
        alert("Thank you for your message! I'll get back to you soon.");
        form.reset();
    });
}
