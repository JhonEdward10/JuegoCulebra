const playBoard = document.querySelector(".play-board");
const scoreElement = document.querySelector(".score");
const highScoreElement = document.querySelector(".high-score");
const controls = document.querySelectorAll(".controls i");

let gameOver = false;
let foodX, foodY;
let snakeX = 5, snakeY = 5; 
let velocityX = 0, velocityY = 0;
let snakeBody = [];
let setIntervalId;
let score = 0;

//Get high score from local storage

let highScore = localStorage.getItem("high-score") || 0;
highScoreElement.innerText= `High Score: ${highScore}`;

// Pass a random between 1 a 30 as food position

const updatePosition = () => {
    foodX = Math.floor(Math.random() * 30) + 1;
    foodY = Math.floor(Math.random() * 30) + 1;
};

const handleGameOver = () => {
    clearInterval();
    alert("Game Over! Press Ok to Reboot...");
    location.reload();
};

//Change velocity value based on key press

const changeDirection = e => {
    if(e.key === "arrow-Up" && velocityY != 1){
        velocityX = 0;
        velocityY = -1;
    }
    else if(e.key === "arrow-Down" && velocityY != -1){
        velocityX = 0;
        velocityY = -1;
    }
    else if(e.key === "arrow-Left" && velocityX != -1){
        velocityX = -1;
        velocityY = 0;
    }
    else if(e.key === "arrow-Right" && velocityX != 1){
        velocityX = -1;
        velocityY = 0;
    }
};

//Chage direction on each key click

controls.forEach(button => button.addEventListener("click", () => changeDirection({
    key: button.dataset.key
})));

const initGame = () => {
    if(gameOver){
        return handleGameOver();
    };

    let html = `<div class="food" style="grid-area: ${foodX} ${foodY }"></div>`

    //when snake eat food

    if(snakeX === foodX && snakeY === snakeY){
        updatePosition();
        snakeBody.push([foodY, foodX]); //add food to snake body array
        score++;
        highScore = score >= highScore ? score : highScore;

        localStorage.setIte
    };
};

