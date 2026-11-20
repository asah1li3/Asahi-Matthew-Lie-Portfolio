const menuIcon = document.getElementById('menu-icon');
const navLinks = document.querySelector('.nav-links');

function closeMenu() {
    navLinks.classList.remove('open');
    menuIcon.classList.add('fa-bars');
    menuIcon.classList.remove('fa-xmark');
}

menuIcon.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    menuIcon.classList.toggle('fa-bars', !isOpen);
    menuIcon.classList.toggle('fa-xmark', isOpen);
});

navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu);
});

const sections = document.querySelectorAll('section[id]');
const navAnchors = navLinks.querySelectorAll('a');

function setActiveLink() {
    let current = '';

    sections.forEach((section) => {
        if (window.scrollY >= section.offsetTop - 200) {
            current = section.id;
        }
    });

    navAnchors.forEach((anchor) => {
        anchor.classList.toggle('active', anchor.getAttribute('href') === `#${current}`);
    });
}

window.addEventListener('scroll', setActiveLink, { passive: true });
setActiveLink();
