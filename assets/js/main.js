const modalViews = document.querySelectorAll('.services__modal'),
      modalBtns = document.querySelectorAll('.services__button'),
      modalCloses = document.querySelectorAll('.services__modal-close');

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal');
}

modalBtns.forEach((mb, i)=>{
    mb.addEventListener('click', ()=>{
        modal(i);
    });
});

modalCloses.forEach((mc)=>{
    mc.addEventListener('click', ()=>{
        modalViews.forEach((mv)=>{
            mv.classList.remove('active-modal');
        });
    });
});


modalViews.forEach((mv) => {
    mv.addEventListener('click', (e) => {
        if (e.target === mv) {
            mv.classList.remove('active-modal');
        }
    });
});