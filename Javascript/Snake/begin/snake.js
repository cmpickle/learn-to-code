window.onload = function() {
  canvas = document.getElementById('gc');
  context = canvas.getContext('2d');
  document.addEventListener('keydown', keyPush);
  setInterval(game, 1000 / 15);
};

let playerX = 10;
let playerY = 10;
let appleX = 15;
let appleY = 15;
let gridSize = 20;
let tileCount = 20;

var xVelocity = 0;
var yVelocity = 0;

var trail = [];
var tail = 5;

function game() {
  // Apply player X velocity
  // Apply player Y velocity
  // Make snake wrap screen
  // Set background color black
  // Set snake color yellow and draw snake
  // Place and draw apple
}

function keyPush(event) {
  switch (
    event.keyCode
    // Left arrow is 37
    // Up arrow is 38
    // Right arrow is 39
    // Down arrow is 40
  ) {
  }
}
