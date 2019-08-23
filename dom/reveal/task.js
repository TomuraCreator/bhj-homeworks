const block = document.querySelector('.reveal');
window.addEventListener('scroll', ()=> {
    let block_size = block.getBoundingClientRect();
    if (block_size.top < window.innerHeight) block.classList.add('reveal_active')
    else block.classList.remove('reveal_active')
})