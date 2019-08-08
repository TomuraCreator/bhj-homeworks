const timeLog = document.getElementById("clicker__counter_speed"),
    cookies = document.getElementById("cookie");

let times = 0;
cookies.onclick = () => {
    document.getElementById("clicker__counter").textContent++;
    document.body.style.backgroundColor = colorRandom();
    timeLog.textContent = (1000 / (Date.now() - times)).toFixed(1);
    times = Date.now();
}
cookies.onmousedown = ()=> {
    cookies.width = 490;
    cookies.heigth = 490;
}
cookies.onmouseup = ()=> {
    cookies.width = 500;
    cookies.heigth = 500;
};
function colorRandom() {
        const r=Math.floor(Math.random() * (256)), g=Math.floor(Math.random() * (256)),b=Math.floor(Math.random() * (256)),
        c='#' + r.toString(16) + g.toString(16) + b.toString(16);
        return c;
}
    