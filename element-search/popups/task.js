window.onload = ()=> setTimeout(()=> {
    _io_q('#modal_main').style.display = 'block';

}, 1000)


// хэш функция ссылки DOM елемента
function cache(key, value) {
    if(typeof value == 'undefined') return cache[key]
    cache[key] = value;
} 
let _io_q = function(sel) {
    if(!cache(sel)) cache(sel, document.querySelector(sel));
    return cache(sel);
}
// хэш функция ссылки DOM елемента



_io_q('#modal_main .modal__close').addEventListener('click', ()=> _io_q('#modal_main').style.display = 'none') // 


_io_q('#modal_success .modal__close').addEventListener('click', ()=> _io_q('#modal_success').style.display = 'none')


// _io_q('.modal_close').onclick = ()=> {
//     _io_q('.modal').style.display = 'none';
// } //объясните почему такая запись не работала если кликать на крестик в окне #modal_succes, но работала в #modal_main ?

_io_q('.show-success').onclick = () => {
    _io_q('#modal_success').style.display = 'block';


}