const links = document.querySelectorAll('.menu__link'),
    menu = document.querySelectorAll('.menu');

function mouseHover() {
    let element = this.nextElementSibling;
    if(!element) return
    else element.style.display = 'block';
    element.addEventListener('mouseleave', function(){
        element.style.display = 'none'
    })
}

for(let i = 0; i<links.length; i++) {
    links[i].addEventListener('mouseenter', mouseHover)
}