const toggle = document.querySelector('#toggle');
const screen = document.querySelector('#screen');
const navLinks = document.querySelectorAll('.nav-link');
const close = document.querySelector('#close');




toggle.addEventListener('click', function() {
    screen.classList.toggle('reveal');
    toggle.classList.toggle('expand');
    navLinks.forEach(element => {
        element.classList.toggle('reveal')
    });
    close.classList.toggle('reveal');
    console.log('menu clicked');
})

close.addEventListener('click', function() {
    screen.classList.toggle('reveal');
    toggle.classList.toggle('expand');
    navLinks.forEach(element => {
        element.classList.toggle('reveal')
    });
    close.classList.toggle('reveal');
    console.log('close clicked');
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'escape') {
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
        navLinks.forEach(element => {
            element.classList.toggle('reveal')
        });
        close.classList.toggle('reveal');
    });
    console.log('link clicked')
});

