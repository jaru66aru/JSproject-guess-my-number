'use strict';

let ranNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

/// Function for display .textContent
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayHeader = function (header) {
  document.querySelector('.header').textContent = header;
};
const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};
const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('🤔 No Number ???');
  } else if (guess === ranNumber) {
    displayHeader('The Correct Number is');
    displayMessage('🎉 Congratulations!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.color = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    displayNumber(ranNumber);
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== ranNumber) {
    if (score > 1) {
      displayHeader(guess > ranNumber ? 'Too High!' : 'Too Low!');
      displayNumber(guess > ranNumber ? '⏫' : '⏬');
      displayMessage('Keep guessing...');
      score--;
      displayScore(score);
    } else {
      displayMessage('😥 You lost the game!');
      displayScore(0);
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  ranNumber = Math.trunc(Math.random() * 20) + 1;
  displayHeader('Guess My Number!');
  displayNumber('?');
  displayMessage('Start guessing...');
  displayScore(score);
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.color = '#222';
  document.querySelector('.number').style.width = '15rem';
});
