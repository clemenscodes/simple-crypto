import './../scss/main.scss';

const sections = document.querySelectorAll('section');
const navigationLinks = document.querySelectorAll('nav > ul > li > a');
const progressBar = document.getElementById('bar');

window.addEventListener('scroll', scrollIndicator);

function scrollIndicator() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    progressBar.style.width = scrolled + "%";

    highlightNavItem(winScroll);
}

function highlightNavItem(position) {
    sections.forEach(section => {
        const target = section.offsetTop;
        const id = section.getAttribute('id');
        if (position >= target) {
            navigationLinks.forEach(link => link.classList.remove('active'));
            document.querySelector(`nav > ul > li > a[href='#${id}']`).classList.add('active');
        }
    });
}

const burgerMenuIcon = document.querySelector('#burger-menu-icon');
const closeBurgerMenuIcon = document.querySelector('#burger-menu-icon-close');
const navigation = document.querySelector('nav');

burgerMenuIcon.addEventListener('click', showMenu);
closeBurgerMenuIcon.addEventListener('click', closeMenu);

function showMenu() {
    navigation.classList.add('fade-in');
    changeNavStyle(true);
}

function closeMenu() {
    navigation.classList.add('fade-out');
    navigation.addEventListener('animationend', handleClose);
}

function handleClose() {
    navigation.removeEventListener('animationend', handleClose);
    navigation.classList.remove('fade-out');
    changeNavStyle(false);
}

function changeNavStyle(showNav) {
    if (showNav) {
        burgerMenuIcon.style.display = 'none';
        navigation.style.display = 'block';
        closeBurgerMenuIcon.style.display = 'block';
        return;
    }
    navigation.style.display = 'none';
    closeBurgerMenuIcon.style.display = 'none';
    burgerMenuIcon.style.display = 'block';
}

particlesJS('particles',
    {
        "particles": {
            "number": {
                "value": 50,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#ffffff"
            },
            "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 5,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 5,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "repulse"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 400,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true,
    }
);
