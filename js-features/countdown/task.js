const timer = document.getElementById('timer');

const interval = setInterval(()=> {
    if (timer.textContent == 0) {
        clearInterval(interval);
        if(Math.round(Math.random()) == 0) {
            if(confirm('Вы выиграли ничего!!! Попробовать снова?')) window.location.reload();
        } else {
            alert('Вы победили! Держите вирус!');
            document.location.assign('http://vxvault.net/ViriList.php')
        }
    }
    timer.textContent--;
}, 1000);
