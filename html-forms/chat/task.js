const batton_open_chat = document.querySelector('.chat-widget'), 
     message_window = document.querySelector('.chat-widget__input'), // поле ввода
    messages_container = document.querySelector('.chat-widget__messages-container'); //поле вывода чата


const praselist = [1, 'Вы кто такия, я вас не звал???', 'Тамбовский волк тебе консультант', 'Уходите', 'Я щас Антона позову!', 'Неважно, он придет и вы тут попляшете...', 'Ктобы мог подумать.', 'Я тут не работаю', 
    'Кто знает', 'Сидят, значит, три джуниора Русский Англичанин и Немец...', 'Лялялялялялялялялялял',
    'Смотрю на вас и вы мне не нравитесь!'] 
    // 0 - счётчик, 1... - фразы бота.

batton_open_chat.addEventListener('click', function() {
    batton_open_chat.classList.add('chat-widget_active')
}); //раскрытие чата

message_window.addEventListener('keydown', function() {
    message_container_value = document.querySelector('.chat-widget__input').value;

    if(event.key == 'Enter' && message_container_value != '' && praselist[0] !== praselist.length) {
        messages_container.append(createDIV(message_container_value)); // вставляем сформированный елемент от клиента
        setTimeout(function() { 
            messages_container.append(createDIV(praselist[praselist[0]], false)) // вставляем сформированный елемент, false - от бота
        }, 700) // эмулируем интернет))
        praselist[0]++; //увеличиваем счётчик
        messages_container.scrollTop = 9999; //автоскролл вниз
        if(praselist[0] == praselist.length) praselist[0] = 1 // обнуление счетчика если конец массива
    }
})
function createDIV(text, client = true) {
    const date = new Date();
    
    let element = document.createDocumentFragment();
    div_wrapper = document.createElement('div');
    div_child1 = document.createElement('div');
    div_child2 = document.createElement('div');

    div_wrapper.className = `message ${(client) ? 'message_client' : ''}`; // если client true то это клиент, false - бот
    div_child1.className = 'message__time';
    div_child1.innerText = `${date.getHours()} : ${date.getMinutes()}` //актуальное время
    div_child2.className = 'message__text';
    div_child2.innerText = text;

    div_wrapper.appendChild(div_child1);
    div_wrapper.appendChild(div_child2);
    element.appendChild(div_wrapper);
    return element;
}