const links = document.querySelectorAll('.menu__link'),
    menu = document.querySelectorAll('.menu');

for(let i = 0; i< links.length; i++) {
    links[i].addEventListener('click', function(event) {
        let elem = this.nextElementSibling;
        if(!elem) return //если детей нет выходим из функции
        else {
            event.preventDefault();
            if(!elem.classList.contains('menu_active')) {
                for(let b = 0; b < menu.length; b++) {
                    menu[b].classList.remove('menu_active');
                } // если во всложенном списке нет класса menu_active, удаляем этот класс в других местах
            }
            elem.classList.toggle('menu_active') //иначе открываем список 
        }
    })
}
