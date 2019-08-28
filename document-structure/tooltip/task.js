const body = document.body;

body.addEventListener('click', function(e) {
    e.preventDefault();
    let target = e.target;
    const clientRect = target.getBoundingClientRect();
    if(target.classList.contains('has-tooltip')) {
        if(target.nextElementSibling.classList.contains('tooltip_active')) deleteElement();
        else {
            deleteElement();
            target.insertAdjacentHTML('afterend', `<div class="tooltip tooltip_active"
            style="left: ${clientRect.left + 'px'}; top: ${clientRect.bottom + 'px'}">${target.getAttribute('title')}</div>`)
        }
    }
})
function deleteElement() {
    if(document.querySelector('.tooltip_active') !== null) 
        document.querySelector('.tooltip_active').remove();
}
