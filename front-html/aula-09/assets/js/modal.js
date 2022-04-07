// detectar o evento click, quando clicado executará uma função
document.addEventListener('click', function (event) {

    //verificando se a imagem da galeria foi clicada, para isso estou verificando se ela possui a class gallery-item
    // console.log(event.target);
    if (event.target.classList.contains('gallery-item')) {

        //pegar os atributos da imagem
        const src = event.target.getAttribute('src');
        const alt = event.target.getAttribute('alt');
        // console.log(src,alt);

        document.querySelector('.modal-title').textContent = alt;
        document.querySelector('.modal-img').src = src;

        const myModal = new bootstrap.Modal(document.getElementById('gallery-modal')) ;
        myModal.show();
    }    
});
