let userScore = 0;
let computerScore = 0;
let userScoreSpan = document.getElementById('user-score');
let computerScoreSpan = document.getElementById('computer-score');
let scoreBoardDiv = document.querySelector('.score-board');
let resultDiv = document.querySelector('.result > p');
let rockDiv = document.getElementById('rock');
let paperDiv = document.getElementById('paper');
let scissorsDiv = document.getElementById('scissors');

function getComputerChoice() {
  // Create array of options
  const choices;
  // Choose a random number 1-3
  const randomNumber = Math.floor(Math.random() * 3);
  // Return randomly selected value from array
  return choices[randomNumber];
}

function win(userChoice, computerChoice) {
  // Increment users score
  // Update user score
  // Display result message
}

function lose(userChoice, computerChoice) {
  // Increment computer score
  // Update computer score
  // Display result message
}

function draw(userChoice, computerChoice) {
  // Display draw result
}

function game(userChoice) {
  // Calculate the computer choice
  const computerChoice;

  switch (
    userChoice + computerChoice
    // Switch on various outcomes
  ) {
  }
}

function main() {
  rockDiv.addEventListener('click', function() {
    // Game Logic
  });

  paperDiv.addEventListener('click', function() {
    // Game Logic
  });

  scissorsDiv.addEventListener('click', function() {
    // Game Logic
  });
}

// Start the program
main();
