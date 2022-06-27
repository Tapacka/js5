dead = document.getElementById('dead');
lost = document.getElementById('lost');
getHole = index => document.getElementById(`hole${index}`);
for (let i=1; i<10; i++) {    
    getHole(i).onclick = () => {        
        if (getHole(i).className == 'hole') {
            lost.textContent = Number(lost.textContent)+1;
        } else {dead.textContent = Number(dead.textContent)+1;}
        if (lost.textContent == 5) {
            alert('вы проиграли!');
            lost.textContent = 0;
            dead.textContent = 0;
        } else if (dead.textContent == 5) {
            alert('вы победили');
            lost.textContent = 0;
            dead.textContent = 0;
        }
    }
}