const p = document.getElementById('timer');
function timer() {
    p.textContent = p.textContent - 1;
    if (p.textContent == 0) {
        clearInterval(c);
        alert('Вы победили!')
    } 
}
let c = setInterval(timer, 1000);