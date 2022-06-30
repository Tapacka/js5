const span = document.getElementById('timer');
let date = new Date();
date.setUTCHours(0, 1, span.textContent);
span.textContent = date.toISOString().slice(11,19);
function timer() {
    date.setSeconds(date.getSeconds() - 1);
    span.textContent = date.toISOString().slice(11,19);
    if (span.textContent == '00:00:00') {
        clearInterval(c);
        alert('Вы победили!');
    }
}
let c = setInterval(timer, 1000);
