const dead = document.getElementById('dead'),
    miss = document.getElementById("lost");

for(let i = 1; i < 10; i++) {
    
    document.getElementById("hole"+i).onclick = ()=> {
        if (+dead.textContent == 9 ) { 
            alert("Поздравляем! Вы живодёр");
            clearState(); 
        }
        else if (+miss.textContent == 4) { 
            alert("В следующий раз получится"); 
            clearState();
        }
            else if(document.getElementById("hole"+i).classList.contains('hole_has-mole'))dead.textContent++
            else miss.textContent++
    }
}
function clearState() {
    dead.textContent = 0;
    miss.textContent = 0;
}