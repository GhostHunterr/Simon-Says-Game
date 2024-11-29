let gameSeq = []; // To track the game Seq
let userSeq = []; // To track the users current Seq

let btns = ["yellow", "red", "purple", "green"];

let started = false;
let level = 0;
let highScore = 0;

let h2 = document.querySelector('#level');
let startBtn = document.querySelector('#startBtn')

startBtn.addEventListener('click', function () {
    if (started == false) {
        started = true;
        levelUp();
    }
})

//#region Flash Functions
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
//#endregion

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
        if (userSeq.length === gameSeq.length) {
            setTimeout(levelUp, 1000);

        }
    }
    else {
        highScore = Math.max(highScore, level - 1);
        h2.innerHTML = `Game Over! Your Score is <b>${level - 1}</b> </br>Press the Start Button to Restart the game.`;
        document.querySelector('body').style.backgroundColor = 'red';
        setTimeout(() => {
            document.querySelector('body').style.backgroundColor = 'white';
        }, 150);
        document.querySelector('#highScore').innerText = `High Score: ${highScore}`;

        reset();
    }
}

function btnPress() {
    //Ignore if game not started.
    if (!started) {
        return;
    }

    let btn = this;
    console.log(btn);
    userFlash(btn);

    let userClr = btn.getAttribute("id");
    userSeq.push(userClr)

    checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll('.btn');
for (const btn of allBtns) {

    btn.addEventListener('click', btnPress);
}

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}