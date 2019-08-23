const has_tooltip = document.querySelectorAll('.has-tooltip');

for (let element of has_tooltip) {
    element.addEventListener('click', function(e) {
        const tooltip = document.querySelector('.tooltip');
        const clientRect = e.target.getBoundingClientRect();
        const style_tooltip = tooltip.style; 
        e.preventDefault();

        tooltip.classList.toggle('tooltip_active');
        
        style_tooltip.left = clientRect.left + 'px';
        style_tooltip.top = clientRect.bottom + 'px';
        tooltip.textContent = e.target.getAttribute('title');

    })
}
