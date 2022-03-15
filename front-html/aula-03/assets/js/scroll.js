window.addEventListener('scroll',() =>{
    const navBar = document.querySelector('.nav-bar');
    // console.log(windows.scrollY); /* captura o valor da rolagem em pixels */
    navBar.classList.toggle('active-scroll',window.scrollY > 100);
});
