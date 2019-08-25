const buttonIncrement = document.querySelectorAll('.product__quantity-control_inc');
const buttonDecrement = document.querySelectorAll('.product__quantity-control_dec');
const productAdd = document.querySelectorAll('.product__add');


for (i = 0; i < buttonIncrement.length; i++) {
    buttonIncrement[i].addEventListener('click', function() {
        let _target1 = event.target.closest(`[data-id="1"]`);
        let _target2 = event.target.closest(`[data-id="2"]`);
        if(_target1) {
            _target1.querySelector('.product__quantity-value').textContent++
        } else {
            _target2.querySelector('.product__quantity-value').textContent++
        }
    })
    buttonDecrement[i].addEventListener('click', function() {
        let _target1 = event.target.closest(`[data-id="1"]`);
        let _target2 = event.target.closest(`[data-id="2"]`);
        if(_target1) {
            if(_target1.querySelector('.product__quantity-value').textContent > 1) {
                _target1.querySelector('.product__quantity-value').textContent--
            }
        } else {
            if(_target2.querySelector('.product__quantity-value').textContent > 1) {
                _target2.querySelector('.product__quantity-value').textContent--
            }
        }
    })

    productAdd[i].addEventListener('click', function() {
        let _target1 = event.target.closest(`[data-id="1"]`);
        let _target2 = event.target.closest(`[data-id="2"]`);
        let cart = document.querySelector('.cart__products'); 
        if(_target1) {
            if(cart.querySelector(`[data-id="${1}"]`)) {
                cart.querySelector('[data-id="1"]').lastChild.textContent = Number(_target1.querySelector('.product__quantity-value').textContent);
            } else {
                cart.appendChild(createElement( 1, Number(_target1.querySelector('.product__quantity-value').textContent), _target1.querySelector('img').getAttribute('src')));
            }
        } else if(_target2) {
            if(cart.querySelector(`[data-id="${2}"]`)) {
                cart.querySelector('[data-id="2"]').lastChild.textContent = Number(_target2.querySelector('.product__quantity-value')
            .textContent);
            } else {
                cart.appendChild(createElement( 2, Number(_target2.querySelector('.product__quantity-value').textContent), _target2.querySelector('img').getAttribute('src')));
            }
        }
    })
}

/**
 * Создаёт новую карточку товара
 * @param {Number} id номер добавляемого товара  
 * @param {Number} value количество товара  
 * @param {String} image адрес изображения 
 */
function createElement(id, value, image) {
    let fragment = document.createDocumentFragment();
    let div__data_id = document.createElement('div');
    let div__data_value = document.createElement('div');
    let img = document.createElement('img');
    let div__delete = document.createElement('div');

    div__data_id.setAttribute('data-id', id);
    div__data_id.classList.add('cart__product');
    
    img.setAttribute('src', image);
    img.classList.add('cart__product-image');

    div__data_value.classList.add('cart__product-count');
    div__data_value.textContent = value;

    div__delete.classList.add('delete');
    div__delete.setAttribute('title', 'Удалить товар');
    div__delete.innerHTML = "&#128939";
    div__delete.addEventListener('click', function(e){
        e.target.closest(`.cart__product`).remove();
    })

    div__data_id.appendChild(div__delete);
    div__data_id.appendChild(img);
    div__data_id.appendChild( div__data_value);
    fragment.append(div__data_id);

    return fragment;
}