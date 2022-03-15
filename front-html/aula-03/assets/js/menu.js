const menuBtn = document.querySelector('.menu-btn');
const navMenu = document.querySelector('.nav-menu');

// menuBtn.addEventListener('click',function() => {
menuBtn.addEventListener('click',() => {
    navMenu.classList.toggle('mobile-menu');
})
