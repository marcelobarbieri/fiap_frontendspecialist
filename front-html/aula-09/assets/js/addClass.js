document.addEventListener('DOMContentLoaded', () => {
    getImages=document.querySelectorAll('.gallery-item');
    // console.log(getImages);

    for(let i = 0; i < getImages.length; i++){
        getImages[i].classList.add((i % 2 ==0) ? 'left-rotate': 'right-rotate');
    }
});
