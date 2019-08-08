document.getElementById("cookie").onclick = () => {
    document.getElementById("clicker__counter").textContent++;
    document.body.style.backgroundColor = colorRandom();
}
function colorRandom(){
        const r=Math.floor(Math.random() * (256));
        const g=Math.floor(Math.random() * (256));
        const b=Math.floor(Math.random() * (256));
        const c='#' + r.toString(16) + g.toString(16) + b.toString(16);
        return c;
}
    