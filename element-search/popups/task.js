//появление popup после загрузки страницы
window.onload = ()=> setTimeout(()=> modal[0].classList.add('modal_active') , 1000)

const modal = document.querySelectorAll('.modal'),
    button = document.querySelector('.show-success'), 
    modal__close = document.querySelectorAll('.modal__close_times');

//слушатель событий на кнопку 
button.addEventListener('click', function() {
    modal[0].classList.remove('modal_active');
    modal[1].classList.add('modal_active');
})

// слушатель событий на все крестики
for(let i = 0, b = 0; i < modal__close.length; i++, b++) {
    modal__close[i].addEventListener('click', function() {
        modal[i].classList.remove('modal_active');
    })
}