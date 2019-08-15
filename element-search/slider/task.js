window.onload = function() {
    slider__dots[num].classList.add('slider__dot_active'); 
}

let num = 0;

const slider_prev = document.querySelector('.slider__arrow_prev'),
    slider_next = document.querySelector('.slider__arrow_next'),
    slider__item = document.querySelectorAll('.slider__item'),
    slider__dots = document.querySelectorAll('.slider__dot');


/**
 * Удаляет все дополнительные классы двух коллекций в аргументах
 * @param 1 {Element}- аргумент для коллекции карточек
 * @param 2 {Element}- аргумент для коллекции точек
*/

function removeMarks(element, dots) {
    for(let i = 0; i < element.length; i++) {
            element[i]
                .classList
                .remove('slider__item_active');
            dots[i]
                .classList
                .remove('slider__dot_active');
    }
}

/**
 * Кликер для кнопки `slider_next`. перемещает слайд на 1 вправо.
 */
slider_next.addEventListener('click', function() {   
    if(num < slider__item.length-1) {
        removeMarks(slider__item, slider__dots)
        slider__item[num += 1]
            .classList
            .add('slider__item_active');
    } else if(num === slider__item.length - 1) {
        removeMarks(slider__item, slider__dots)
        num = 0;
        slider__item[num]
            .classList
            .add('slider__item_active');
    }
    slider__dots[num]
            .classList
            .add('slider__dot_active');
})

/**
 * Кликер для кнопки `slider_prev`. перемещает слайд на 1 влево.
 */
slider_prev.addEventListener('click', function() {   
    if (num > 0) {
        removeMarks(slider__item, slider__dots)
        slider__item[num -= 1]
            .classList
            .add('slider__item_active');

    } else if(num == 0) {
        removeMarks(slider__item, slider__dots)
        num = slider__item.length - 1;      
        slider__item[num]
            .classList
            .add('slider__item_active');
    }
    slider__dots[num]
            .classList
            .add('slider__dot_active');
})

/**
 * цикл для выборки точек
 */

for(let i = 0; i < slider__dots.length; i++) {
    slider__dots[i].addEventListener('click', function() {
        num = i;
        removeMarks(slider__item, slider__dots)
        slider__item[i]
            .classList
            .add('slider__item_active');
        slider__dots[num]
            .classList
            .add('slider__dot_active');
    })
}