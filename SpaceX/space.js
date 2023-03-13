function hamburger() {
    let menuBar = document.querySelector('.hamburger')

    menuBar.addEventListener('click', () => {
        let navBar = document.querySelector('.navigation');
        navBar.classList.toggle('active')
    })
} hamburger();


function scrollVigation() {
let lastScroll = 0;
navBar = document.querySelector('.header')
window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScroll) {
        navBar.style.top = "-15vh"
    } else {
        navBar.style.top = "0vh"
    }
    lastScroll = scrollTop;
})
} scrollVigation();