const clicker__counter = document.getElementById('clicker__counter');
const cookie = document.getElementById('cookie');
const clicker__speed = document.getElementById('clicker__speed');
let d = 0;
let d1 = 0;
let d2 = 0;
cookie.onclick = () => {
    ++clicker__counter.textContent;    
    if (clicker__counter.textContent % 2 == 0) {
        cookie.width += 20;
        cookie.height += 20;
        d1 = d;
    } else {
        cookie.width -= 20;
        cookie.height -= 20;
        d2 = d;
    }
    if (d2 > d1) {clicker__speed.textContent = 1/(d2-d1)*100;} else {clicker__speed.textContent = 1/(d1-d2)*100;}
}
function timer() {
    d=d+1;
}
setInterval(timer, 10)