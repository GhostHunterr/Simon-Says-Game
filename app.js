let gameSeq = []; // To track the game Seq
let userSeq = []; // To track the users current Seq

let btns = ["yellow", "red", "purple", "green"];

let started = false;
let level = 0;

let h2 = document.querySelector('h2');

document.addEventListener('click', function () {
    if (started == false) {
        console.log("Game Started.");
        started = true;

        levelUp();
    }
})

function gameFlash(btn) {
    btn.classList.add('gameFlash');
    setTimeout(() => {
        btn.classList.remove('gameFlash');
    }, 150);
}

function userFlash(btn) {
    btn.classList.add('userFlash');
    setTimeout(() => {
        btn.classList.remove('userFlash');
    }, 150);
}

function levelUp() {
    level++;
    h2.innerText = `Level ${level}`;

    //random btn choose.
    let randomIdx = Math.floor(Math.random()*4)
    let randomClr = btns[randomIdx];
    let randomBtn = document.querySelector(`.${randomClr}`);
    
    //flash
    gameFlash(randomBtn);
}


function btnPress(){
    let btn = this;
    userFlash(btn);
}

let allBtns = document.querySelectorAll('.btn');
for (const btn of allBtns) {
    btn.addEventListener('click', btnPress)
}