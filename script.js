'use strict';
//DOM Elements
const rockDiv = document.querySelector('#rock');
const paperDiv = document.querySelector('#paper');
const scissorsDiv = document.querySelector('#scissors');

const userScore = document.getElementById('userScore');
const cpuScore = document.getElementById('compScore');

const restartBtn = document.getElementById('restartBtn');

//Starting Conditions

const ROCK = 'rock';
const PAPER = 'paper';
const SCISSORS = 'scissors';
const options = [ROCK, PAPER, SCISSORS];
let playerScore = 0;
let computerScore = 0;

//Will update Result Message
const displayMessage = function (message) {
  document.querySelector('.results').textContent = message;
};
//Computer Choice
const computerPlay = function () {
  return options[Math.floor(Math.random() * options.length)];
};

const gameOver = function () {
  if (playerScore === 5) {
    displayMessage('Congratulations! You have beat the Machine!');
    return true;
  } else if (computerScore === 5) {
    displayMessage('The Machine has won.');
    return true;
  }
  return false;
};

const playRound = function (playerSelection, computerSelection) {
  if (gameOver()) return;
  //Use an if/else statement
  if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'scissors') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    playerScore++;
    userScore.innerHTML = playerScore;
    displayMessage(`You won 💯! ${playerSelection} beats ${computerSelection}`);
  } else if (playerSelection === computerSelection) {
    displayMessage(`It's a tie!`);
  } else {
    computerScore++;
    cpuScore.innerHTML = computerScore;
    displayMessage(
      `You lose 😞! ${computerSelection} beats ${playerSelection}`
    );
  }
};

//Restarts Game
const restartGame = function () {
  playerScore = 0;
  computerScore = 0;
  displayMessage("Let's Play");
  userScore.innerHTML = 0;
  cpuScore.innerHTML = 0;
};

//Event Listeners
rockDiv.addEventListener('click', function () {
  let playerSelection = 'rock';
  let computerSelection = computerPlay();
  playRound(playerSelection, computerSelection);
});

paperDiv.addEventListener('click', function () {
  let playerSelection = 'paper';
  let computerSelection = computerPlay();
  playRound(playerSelection, computerSelection);
});

scissorsDiv.addEventListener('click', function () {
  let playerSelection = 'scissors';
  let computerSelection = computerPlay();
  playRound(playerSelection, computerSelection);
});
restartBtn.addEventListener('click', restartGame);
