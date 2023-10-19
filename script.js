const toggle = document.querySelector('#toggle');
const screen = document.querySelector('#screen');
const menu = document.querySelector('#menu-container');
const navLinks = document.querySelectorAll('.nav-link');
const close = document.querySelector('#close');
const coffee = document.querySelector('#coffee');
const form = document.querySelector('#form-container');
const revealForm = document.querySelector('.reveal-form')


// Navigation Menu Toggle
toggle.addEventListener('click', () => {
    navReveal('menu clicked');
});

close.addEventListener('click', () => {
    navReveal('close clicked');
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        navReveal('escape key pressed');
}})

navLinks.forEach ( link => {
    link.addEventListener('click', () => {
        navReveal('link clicked')
    });
});

function navReveal(logMessage) {
    screen.classList.toggle('reveal');
    toggle.classList.toggle('expand');
    menu.classList.toggle('reveal');
    close.classList.toggle('reveal');
    console.log(logMessage);
}

// fade in each section as each appears in view. 
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

// perform copy of email address on icon click
const email = document.querySelector('#my-email');
const copy = document.querySelector('#copy');
const tick = document.querySelector('#tick');
const msg = document.querySelector('#copy-message');


async function copyToClipboard() {
    try {
        navigator.clipboard.writeText(email.innerText);
        console.log('Email address copied to clipboard')
    } catch (error) {
        console.error('Error copying email adress', error);
    }
};

copy.addEventListener('click', function() {
    copyToClipboard();
    copy.classList.toggle('hide');
    tick.classList.toggle('unhide');
    msg.classList.toggle('unhide');
});

// reveal the contact form. 
coffee.addEventListener('click', function() {
    form.style.display === 'none' ? form.style.display = 'block' : form.style.display = 'none' 
})