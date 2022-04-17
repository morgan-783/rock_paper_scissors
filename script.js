'use strict';

//Function that randomly returns R/P/S
const options = ['rock', 'paper', 'scissors'];

const computerPlay = function () {
  return options[Math.floor(Math.random() * options.length)];
};
computerPlay();

//Play a single round
