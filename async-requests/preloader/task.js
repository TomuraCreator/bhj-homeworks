const animate = document.querySelector('.loader');
const items = document.querySelector('#items');

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com')
xhr.setRequestHeader('Content-Type','application/json')
xhr.send();
xhr.onreadystatechange = function() {
    if(xhr.readyState===4 && xhr.status === 200)
        {
            animate.classList.remove('loader_active');
            let responceParse = JSON.parse(xhr.responseText);
            const resp = Object.keys(responceParse.response.Valute)
            for(let i = 0; i < resp.length; i++) {
                items.appendChild(createElement(
                    responceParse.response.Valute[resp[i]].CharCode,
                    responceParse.response.Valute[resp[i]].Value,
                    responceParse.response.Valute[resp[i]].Name));
            }
    };
}

/**
 * создаёт элементы с парраметрами
 * @param {Number} code код валюты
 * @param {Number} value курс валюты 
 * @param {String} currency название валюты
 */
function createElement(code, value, currency) {
    const fragment = document.createDocumentFragment();
    const item = document.createElement('div');
    const div_code = document.createElement('div');
    const div_value = document.createElement('div');
    const div_currency = document.createElement('div');

    item.classList.add('item');

    div_code.classList.add('item__code');
    div_code.textContent = code;

    div_value.classList.add('item__value');
    div_value.textContent = value;

    div_currency.classList.add('item__currency');
    div_currency.textContent = currency;

    item.appendChild(div_code);
    item.appendChild(div_value);
    item.appendChild(div_currency);
    fragment.appendChild(item);

    return fragment;
}
