const select = document.querySelector('.section__svg');
const hidden = document.getElementById('hidden');
const mobile = document.getElementById('mobile');
const bg = document.querySelector('.section__profile');
const movile = document.querySelector('.profile__img');
const moviles = document.querySelector('.profile__text');

select.addEventListener('click', () => {
    
    if (window.matchMedia("(min-width: 376px)").matches) {
        hidden.classList.toggle('active');
    }
   

    if(window.matchMedia("(max-width: 375px)").matches) {
        mobile.classList.toggle('activo');       
        bg.classList.toggle('activo');       
        select.classList.toggle('activo');       
    }

    if(window.matchMedia("(max-width: 375px)").matches) {
        movile.classList.toggle('activy');
    }

    if(window.matchMedia("(max-width: 375px)").matches) {
        moviles.classList.toggle('activy');
    }
})
