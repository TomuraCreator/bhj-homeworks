const dropDown = document.querySelector('.dropdown__value'),
    dropdown_list = document.querySelector('.dropdown__list'), 
    list = dropdown_list.childNodes;

dropDown.addEventListener('click', ()=> {
    dropdown_list.classList.toggle('dropdown__list_active')
})
for(let i = 0; i < list.length; i++) {
    list[i].addEventListener('mousedown', function() {
        event.preventDefault();
        dropDown.textContent = event.target.textContent;
        console.log(event.target.textContent)
        dropdown_list.classList.remove('dropdown__list_active');
    })
}