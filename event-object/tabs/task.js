const main = document.querySelectorAll('.tab'),
    tab_content = document.querySelectorAll('.tab__content');

for(let i = 0; i < main.length; i++) {
    main[i].addEventListener('click', () => {
        clearClass(); // очищаем классы
        main[i].classList.add('tab_active');
        tab_content[i].classList.add('tab__content_active')
    })
} 

function clearClass() {
    for(let b = 0; b < main.length; b++) {
        main[b].classList.remove('tab_active');
        tab_content[b].classList.remove('tab__content_active');
    }
} // удаляет классы активаторы