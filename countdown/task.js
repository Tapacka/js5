const p = document.getElementById('timer');
var date = new Date();
date.setUTCHours(0, 1, p.textContent);
p.textContent = date.toISOString().slice(11,19);
function timer() {
    date.setSeconds(date.getSeconds() - 1);
    p.textContent = date.toISOString().slice(11,19);
    if (p.textContent == '00:00:00') {
        clearInterval(c);
        alert('Вы победили!');
    }
}
let c = setInterval(timer, 1000);