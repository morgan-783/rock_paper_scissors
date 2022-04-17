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
//Remove playround parameters. define computer and player selection then.
//Play a single round
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
    alert`You won 💯! ${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection === computerSelection) {
    alert`It's a tie!`;
  } else {
    computerScore++;
    alert`You lose 😞! ${computerSelection} beats ${playerSelection}`;
  }
};
//Plays Multiple Rounds
const game = function () {
  for (let i = 0; i < 5; i++) {
    playRound(i);
  }
};
game();
