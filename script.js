// avbar fixed
window.onscroll = function() {
    const element = document.querySelector('gg');
    const fixNav = header.offsetTop;
    if (window.pageYOffset > fixNav) {
        element.style.position = 'fixed'; // fixed
        element.style.zIndex = '50'; // z-50
        element.style.backgroundColor = 'rgba(255, 255, 255, 0.8)'; // bg-white bg-opacity-80
        element.style.backdropFilter = 'blur(5px)'; // backdrop-filter: blur(5px)
        element.style.boxShadow = 'inset 0 -1px 0 0 rgba(0, 0, 0, 0.1)'; // box-shadow: inset 0 -1px 0 0 rgba(0, 0, 0, 0.1)
    } else {
        header.classList.remove('navFix');
    }
}


// hamburer

const ham = document.querySelector('#hamburger')
const navMenu = document.querySelector('#navMenu')
ham.addEventListener('click', function(){
    ham.classList.toggle('hamaktip');
    navMenu.classList.toggle('hidden');
})

