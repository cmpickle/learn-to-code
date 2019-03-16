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
  const choices = ['rock', 'paper', 'scissors'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function win(userChoice, computerChoice) {
  userScore++;
  userScoreSpan.innerHTML = userScore;
  computerScoreSpan.innerHTML = computerScore;
  resultDiv.innerHTML = userChoice + ' beats ' + computerChoice + '. You win!';
}

function lose(userChoice, computerChoice) {
  computerScore++;
  userScoreSpan.innerHTML = userScore;
  computerScoreSpan.innerHTML = computerScore;
  resultDiv.innerHTML = computerChoice + ' beats ' + userChoice + '. You lose!';
}

function draw(userChoice, computerChoice) {
  resultDiv.innerHTML = computerChoice + ' and ' + userChoice + ". It's a draw!";
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case 'rockscissors':
    case 'paperrock':
    case 'scissorspaper':
      console.log('USER WINS.');
      win(userChoice, computerChoice);
      break;
    case 'rockpaper':
    case 'paperscissors':
    case 'scissorsrock':
      console.log('USER LOSES.');
      lose(userChoice, computerChoice);
      break;
    case 'rockrock':
    case 'paperpaper':
    case 'scissorsscissors':
      console.log("It's a draw.");
      draw(userChoice, computerChoice);
      break;
  }
}

function main() {
  rockDiv.addEventListener('click', function() {
    game('rock');
  });

  paperDiv.addEventListener('click', function() {
    game('paper');
  });

  scissorsDiv.addEventListener('click', function() {
    game('scissors');
  });
}

main();
