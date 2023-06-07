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

// random obstacles feature (Profesore ako citate za ovo sam hteo da vas pitam,
//                            ne znam kako da napravim da random slike generatea a
//                             da ne mora da se refresha stranica)

/*window.onload = choosePic;

var myPix = new Array("assets/block.png","assets/cactus1.png");

function choosePic() {
     var randomNum = Math.floor(Math.random() * myPix.length);
     document.getElementById("myPicture").src = myPix[randomNum];
}
*/

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
});

//'Game Over if Character hits the cactus'
let result = setInterval(()=>{
   let dinoBottom = parseInt(getComputedStyle(dino).getPropertyValue("bottom"));
  // console.log("dinoBottom" + dinoBottom);

   let blockLeft = parseInt(getComputedStyle(block).getPropertyValue("left"));
   //console.log("BlockLeft" + blockLeft);

    if(dinoBottom <= 90 && blockLeft >= 0 && blockLeft <= 100){
    //   console.log("Game Over");
      
      gameOver.style.display = "block";
      block.classList.remove("blockActive");
      road.firstElementChild.style.animation = "none";
      cloud.firstElementChild.style.animation = "none";
      clearInterval(interval);
      playerScore = 0;
    }

}, 10);