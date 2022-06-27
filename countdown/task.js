const p = document.getElementById('timer');
var d = new Date();
d.setUTCHours(0, 1, p.textContent);
p.textContent = d.toISOString().slice(11,19);
function timer() {
    d.setSeconds(d.getSeconds() - 1);
    p.textContent = d.toISOString().slice(11,19);
    if (p.textContent == '00:00:00') {
        clearInterval(c);
        alert('Вы победили!');
    }
}
let c = setInterval(timer, 1000);