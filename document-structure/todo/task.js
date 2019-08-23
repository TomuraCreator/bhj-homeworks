window.onload = function() {
    const inputTask = document.querySelector('.tasks__input');
    const taskList = document.querySelector('.tasks__list');
    const addButton = document.querySelector('.tasks__add');

    addButton.addEventListener('click', function(e) {
        e.preventDefault();
        if(inputTask.value != '') {
            taskList.append(createElement(inputTask.value));
            inputTask.value = '';
        }    
    })

    function createElement(title) {
        let fragment = document.createDocumentFragment();
        let main_div = document.createElement('div');
        let div = document.createElement('div');
        let a = document.createElement('a');

        main_div.className = 'task';
        div.className = 'task__title';
        div.textContent = title;
        a.className = 'task__remove';
        a.setAttribute('href', '#');
        a.innerHTML = '&times;';
        a.addEventListener('click', function() {
            event.target.closest('.task').remove();
        })
        
        main_div.appendChild(div);
        main_div.appendChild(a);

        fragment.appendChild(main_div);
        console.log(document.querySelectorAll('.task__title').length)
        return fragment;
    }
}
