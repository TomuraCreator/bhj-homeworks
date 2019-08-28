const buttonIncrement = document.querySelectorAll('.product__quantity-control_inc');
const buttonDecrement = document.querySelectorAll('.product__quantity-control_dec');
const productAdd = document.querySelectorAll('.product__add');


/**
 * 
 */
class Cart {   
    constructor(box) {
        this.body = box;
        this.buttonInc = box.querySelectorAll('.product__quantity-control_inc');
        this.buttonDec = box.querySelectorAll('.product__quantity-control_dec');
        this.productAdd = box.querySelectorAll('.product__add');

        this.buttonIncrement();
        this.buttonDecrement();
        this.addInnBasket(this.createElement);
    }
    buttonIncrement() {
        for(let element of this.buttonInc) {
            element.addEventListener('click', function(e) {
                let target = e.target.closest(`.product`);
                if(target) {
                    target.querySelector('.product__quantity-value').textContent++
                }
            }) 
        }    
    }
    buttonDecrement() {
        for(let element of this.buttonDec) {
            element.addEventListener('click', function(e) {
                let target = e.target.closest(`.product`);
                if(target) {
                    if(target.querySelector('.product__quantity-value').textContent > 1) {
                        target.querySelector('.product__quantity-value').textContent--
                    }
                }
            }) 
        }  
    }
    addInnBasket(create){
        const body_element = this.body;
        for(let product of this.productAdd) {
            product.addEventListener('click', function() {
                let data_event = event.target.closest(`.product`).dataset.id;
                let target_event = event.target.closest(`.product`);
                let cart = body_element.querySelector('.cart__products');
                let value_target = target_event.querySelector('.product__quantity-value');
                
                if(cart.children.length !== 0) {  
                    if(cart.querySelector(`[data-id="${data_event}"]`)) {
                        cart.querySelector(`[data-id="${data_event}"]`).lastChild.textContent = Number(value_target.textContent)
                    } else {
                        console.log(2)
                        cart.appendChild(create(data_event, Number(value_target.textContent), target_event.querySelector('img').getAttribute('src')));
                    }
                } else {
                    cart.appendChild(create(data_event, Number(value_target.textContent), target_event.querySelector('img').getAttribute('src')));
                }
            })
        }
    }
    createElement(id, value, image) {

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

        return div__data_id;
    }
}

new Cart(document.body);
