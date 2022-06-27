const clicker__counter = document.getElementById('clicker__counter');
const cookie = document.getElementById('cookie');
const clicker__speed = document.getElementById('clicker__speed');
d1 = 0
cookie.onclick = () => {
    ++clicker__counter.textContent;    
    clicker__speed.textContent = clicker__counter.textContent/d1;
    if (clicker__counter.textContent % 2 == 0) {
        cookie.width += 20;
        cookie.height += 20;
    } else {
        cookie.width -= 20;
        cookie.height -= 20;
    }
}
function timer() {
    d1=d1+1;
}

setInterval(timer, 1000)