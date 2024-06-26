'use strict';

const NORMAL_COLOR = '#0b1c47';

let back = document.querySelector('.container');
let correctNumber = document.querySelector('.correct-num');
let checkBtn = document.querySelector('.check-btn');
let rateMsg = document.querySelector('.rating');
let scoreMsg = document.querySelector('.score');
let highScoreMsg = document.querySelector('.highScore');
let againBtn = document.querySelector('.again-btn');
let inputValue = document.querySelector('.input-num');

let randomNumber = Math.trunc(Math.random() * 20) + 1;

let user = {
  score: 20,
};

let highestScore;
scoreMsg.textContent = user.score;
highScoreMsg.textContent = 0;
console.log(randomNumber);
checkBtn.addEventListener('click', () => {
  const guessVal = inputValue.value;
  if (guessVal == randomNumber) {
    correctNumber.textContent = randomNumber;
    back.style.background = 'linear-gradient(to top left, #d3c1c3,#01204e )';
    rateMsg.textContent = 'Correct number !';
    if (highestScore > user.score) {
      highScoreMsg.textContent = highestScore;
    } else {
      highestScore = user.score;
      highScoreMsg.textContent = user.score;
    }
  } else if (guessVal > randomNumber) {
    if (user.score > 0) {
      rateMsg.textContent = 'Too High!';
      user.score--;
    } else {
      rateMsg.textContent = 'You Lost The Game!';
    }
  } else {
    if (user.score > 0) {
      rateMsg.textContent = 'Too Low!';
      user.score--;
    } else {
      rateMsg.textContent = 'You Lost The Game!';
    }
  }
  scoreMsg.textContent = user.score;
});

againBtn.addEventListener('click', () => {
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  user.score = 20;
  scoreMsg.textContent = user.score;
  correctNumber.textContent = '?';
  back.style.backgroundColor = NORMAL_COLOR;
  // inputValue.style.backgroundColor = NORMAL_COLOR;
  againBtn.style.color = NORMAL_COLOR;
  correctNumber.style.color = NORMAL_COLOR;
  checkBtn.style.color = NORMAL_COLOR;
  back.style.background = 'linear-gradient(to top left, #01204e, #d3c1c3)';
  rateMsg.textContent = 'Start guessing...';
});
