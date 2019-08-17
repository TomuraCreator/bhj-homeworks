const controls = document.querySelectorAll('.book__control'),
    body = document.body,
    content = document.querySelector('.book__content');

for(let i = 0; i < controls.length; i++) {
    controls[i].addEventListener('click', function() {
        const children = Array.from(event.target.closest('DIV').children), //ближайший родитель
            contain = event.target;
        event.preventDefault();
        if(contain.closest('DIV[class="book__control book__control_font-size"]')) {
            clearClass(children, 'font-size_active') // удаление классов
            contain.classList.add('font-size_active');
            if(contain.dataset.size == 'big') body.style.fontSize = '20px'
            else if(contain.dataset.size == 'small') body.style.fontSize = '10px'
            else body.style.fontSize = '16px'
        } // размер шрифта
        else if(contain.closest('DIV[class="book__control book__control_color"]')) {
            clearClass(children, 'color_active')
            contain.classList.add('color_active');
            if(contain.dataset.color == 'gray') content.style.color = 'grey'
            else if(contain.dataset.color == 'whitesmoke') content.style.color = '#f5f5f5'
            else content.style.color = 'black'
        } // цвет шрифта
        else if(contain.closest('DIV[class="book__control book__control_background"]')) {
            clearClass(children, 'color_active')
            contain.classList.add('color_active');
            if(contain.dataset.color == 'black') body.style.backgroundColor = 'black'
            else if(contain.dataset.color == 'gray') body.style.backgroundColor = 'gray'
            else body.style.backgroundColor = 'white'
            
        } // цвет фона
    })
}

function clearClass(child, selector) {
    child.forEach(element => {
        element.classList.remove(selector)
    });
} // функция очистки классов 