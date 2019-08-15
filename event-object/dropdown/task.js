const dropDown = document.querySelector('.dropdown__value'),//кнопка 
    dropdown_list = document.querySelector('.dropdown__list'), //список
    list = dropdown_list.childNodes; // пункты списка

dropDown.addEventListener('click', ()=> {
    dropdown_list.classList.toggle('dropdown__list_active')
}) // раскрытие закрытие списка по нажатию кнопки

for(let i = 0; i < list.length; i++) {
    list[i].addEventListener('mousedown', function() {
        event.preventDefault();
        dropDown.textContent = event.target.textContent;
        dropdown_list.classList.remove('dropdown__list_active');
    })
}// выбор, замена текста на кнопке, закрытие списка