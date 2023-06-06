let container = document.querySelector("#container");
let dino = document.querySelector("#dino");
let block = document.querySelector("#block");
let road = document.querySelector("#road");
let cloud = document.querySelector("#cloud");
let score = document.querySelector("#score");
let gameOver = document.querySelector("#gameOver");


// declaring variable for score

let interval = null;
let playerScore = 0;

//function for score

let scoreCounter = ()=>{
    playerScore++;
    score.innerHTML = `Score <b>${playerScore}</b>`;
}

//start Game
//interval = setInterval(scoreCounter,200);
window.addEventListener("keydown", (start)=>{
    if(start.code == "Space"){
        gameOver.style.display = "none";
        block.classList.add("blockActive");
        road.firstElementChild.style.animation = "roadAnimate 1.5s linear infinite";
        cloud.firstElementChild.style.animation = "cloudAnimate 50s linear infinite";
        
        //score
        let playerScore = 0;
        interval = setInterval(scoreCounter,200);
    }

});

// jump
window.addEventListener("keydown", (e)=>{
    // console.log(e);
    if(e.key == "ArrowUp")
    if(dino.classList != "jump"){
        dino.classList.add("jump");
    // remove class after 0.5 seconds    
        setTimeout(()=>{
            dino.classList.remove("jump");
        },500);
    }
})