// import 
import { update as updateSnake, draw as drawSnake, SNAKE_SPEED, getSnakeHead, snakeInterSection } from './snake.js'
import { update as updateFood, draw as drawFood } from './food.js'
import { outSideGrid } from './grid.js';

// variables
const gameBord = document.getElementById('game-bord');
let lastRenderTime = 0;
let gameOver = false;
const gameOverSound = new Audio('./music/gameover.mp3')


// game functions
function main(currentTime) {
    if (gameOver) {
        return gameOverSound.play(), alert('you lose'), location.reload();
    }
    window.requestAnimationFrame(main);
    const secondSinceLastRender = (currentTime - lastRenderTime) / 1000;
    if (secondSinceLastRender < 1 / SNAKE_SPEED) return
    lastRenderTime = currentTime;
    update();
    draw();
}
window.requestAnimationFrame(main)

function update() {
    updateSnake();
    updateFood();
    checkDeath();
}

function draw() {
    gameBord.innerHTML = ''
    drawSnake(gameBord);
    drawFood(gameBord);
}

function checkDeath() {
    gameOver = outSideGrid(getSnakeHead()) || snakeInterSection()
}