'use strict';

//Starting Conditions
const options = ['rock', 'paper', 'scissors'];
//Function that randomly returns R/P/S
const computerPlay = function () {
  return options[Math.floor(Math.random() * options.length)];
};
computerPlay();

//Play a single round
const playRound = function (playerSelection, computerSelection) {
  //Use an if/else statement
  if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'scissors') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    console.log(`You won 💯! ${playerSelection} beats ${computerSelection}`);
  } else if (playerSelection === computerSelection) {
    console.log(`It's a tie!`);
  } else {
    console.log(`You lose 😞! ${computerSelection} beats ${playerSelection}`);
  }
};
const computerSelection = computerPlay();
const playerSelection = 'rock';
console.log(playRound(playerSelection, computerSelection));
