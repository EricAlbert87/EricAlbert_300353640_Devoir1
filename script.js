document.querySelectorAll('nav a.nav-link[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView( {behavior: 'smooth' });
        }
    });
});

const sections = document.querySelectorAll('section, .section');
const navLinks = document.querySelectorAll('nav a.nav-link');

const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.6,
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const id = entry.target.id;
            navLinks.forEach(link => {
                link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
            });
        }
    });
}, observerOptions);

sections.forEach(section => observer.observe(section));