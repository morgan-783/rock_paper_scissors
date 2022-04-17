'use strict';

//Starting Conditions
const options = ['rock', 'paper', 'scissors'];

let playerScore = 0;
let computerScore = 0;

//Function that randomly returns R/P/S
const computerPlay = function () {
  return options[Math.floor(Math.random() * options.length)];
};
computerPlay();

const playRound = function () {
  let playerSelection = prompt('Choose your weapon');
  const computerSelection = computerPlay();

  //Use an if/else statement
  if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'scissors') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    playerScore++;
    return `You won 💯! ${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection === computerSelection) {
    return `It's a tie!`;
  } else {
    computerScore++;
    return `You lose 😞! ${computerSelection} beats ${playerSelection}`;
  }
};

//Plays Multiple Rounds
const game = function () {
  for (let i = 0; i < 5; i++) {
    playRound(i);
  }
  if (playerScore > computerScore) {
    alert`Congratulations! You beat the machine. `;
  } else {
    alert`Sorry. The machine has won. `;
  }
};
game();
