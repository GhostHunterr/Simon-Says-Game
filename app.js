let gameSeq = []; // To track the game Seq
let userSeq = []; // To track the users current Seq

let btns = ["yellow", "red", "purple", "green"];

let started = false;
let level = 0;
let highScore = 0;

let h2 = document.querySelector('#level');

document.addEventListener('keydown', function () {
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
    userSeq = [];

    level++;
    h2.innerText = `Level ${level}`;

    //random btn choose and push in sequence.
    let randomIdx = Math.floor(Math.random() * 4)
    let randomClr = btns[randomIdx];
    let randomBtn = document.querySelector(`.${randomClr}`);
    gameSeq.push(randomClr)
    //flash
    gameFlash(randomBtn);
}

function checkAns(idx) {
    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelUp, 1000);
            
        }
    }
    else {
        h2.innerHTML = `Game Over! Your Score is <b>${level-1}</b> </br>Press Any Key to Start.`;
        document.querySelector('body').style.backgroundColor = 'red';
        setTimeout(() => {
            document.querySelector('body').style.backgroundColor = 'white';
        }, 150);
        document.querySelector('#highScore').innerHTML = `High Score: ${level - 1  > highScore ? level - 1 : highScore}`;
        reset();
    }
}

function btnPress() {
    let btn = this;
    userFlash(btn);

    userClr = btn.getAttribute("id");
    userSeq.push(userClr)

    checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll('.btn');
for (const btn of allBtns) {
    btn.addEventListener('click', btnPress)
}

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}