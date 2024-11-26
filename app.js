let gameSeq = []; // To track the game Seq
let userSeq = []; // To track the users current Seq

let started = false;
let level = 0;

document.addEventListener('click', function(){
    if(started == false)
    {
        console.log("Game Started.");
        started = true;
    }
})
