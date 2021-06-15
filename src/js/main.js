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
