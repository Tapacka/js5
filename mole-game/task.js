let dead = document.getElementById('dead');
let lost = document.getElementById('lost');
getHole = index => document.getElementById(`hole${index}`);
final = (text) => {
    alert(text);
    lost.textContent = 0;
    dead.textContent = 0;
}
for (let i=1; i<10; i++) {    
    getHole(i).onclick = () => {        
        if (getHole(i).className == 'hole') {
            lost.textContent = Number(lost.textContent)+1;
        } else {dead.textContent = Number(dead.textContent)+1;}
        if (lost.textContent == 5) {
            final('вы проиграли!')
        } else if (dead.textContent == 5) {
            final('вы победили!')
        }
    }
}
