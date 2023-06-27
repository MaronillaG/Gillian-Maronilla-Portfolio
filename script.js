const toggle = document.querySelector('#toggle');
const screen = document.querySelector('#screen');
const menu = document.querySelector('#menu-container');
const navLinks = document.querySelectorAll('.nav-link');
const close = document.querySelector('#close');




toggle.addEventListener('click', function() {
    screen.classList.toggle('reveal');
    toggle.classList.toggle('expand');
    menu.classList.toggle('reveal');
    close.classList.toggle('reveal');
    console.log('menu clicked');
})

close.addEventListener('click', function() {
    screen.classList.toggle('reveal');
    toggle.classList.toggle('expand');
    menu.classList.toggle('reveal');
    close.classList.toggle('reveal');
    console.log('close clicked');
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        screen.classList.toggle('reveal');
        toggle.classList.toggle('expand');
        navLinks.forEach(element => {
        element.classList.toggle('reveal')
    });
    close.classList.toggle('reveal');
    }
    console.log('escape key pressed');
}) 

navLinks.forEach ( link => {
    link.addEventListener('click', function() {
        screen.classList.toggle('reveal');
        toggle.classList.toggle('expand');
        menu.classList.toggle('reveal');
        close.classList.toggle('reveal');
    });
    console.log('link clicked')
});

const observer = new IntersectionObserver((items) => {
    items.forEach((item) => {
        console.log(item)
        if (item.isIntersecting) {
            item.target.classList.add('show');
        } else {
            item.target.classList.remove('show');
        }
    });
});

const hiddenSections = document.querySelectorAll('.section-hidden');
hiddenSections.forEach((section) => observer.observe(section));