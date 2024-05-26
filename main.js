'use strict';
let back = document.querySelector('.container');
let correctNumber = document.querySelector('.correct-num');
let checkBtn = document.querySelector('.check-btn');
let rateMsg = document.querySelector('.rating');
let scoreMsg = document.querySelector('.score');
let highScoreMsg = document.querySelector('.highScore');
let againBtn = document.querySelector('.again-btn');
let inputValue;
let randomNumber = Math.trunc(Math.random() * 20);
let user = {
  score: 20,
};
scoreMsg.textContent = user.score;
highScoreMsg.textContent = 0;

checkBtn.addEventListener('click', () => {
  inputValue = document.querySelector('.input-num');
  if (inputValue.value == randomNumber) {
    correctNumber.textContent = randomNumber;
    highScoreMsg.textContent = user.score;
    back.style.backgroundColor = '#21B6A8';
    inputValue.style.backgroundColor = '#21B6A8';
    againBtn.style.color = '#21B6A8';
    correctNumber.style.color = '#21B6A8';
    checkBtn.style.color = '#21B6A8';
    rateMsg.textContent = 'Correct number !';
  } else if (inputValue.value > randomNumber) {
    rateMsg.textContent = 'Too High!';
    user.score -= 1;
  } else {
    rateMsg.textContent = 'Too Low!';
    user.score -= 1;
  }
  scoreMsg.textContent = user.score;
});

againBtn.addEventListener('click', () => {
  randomNumber = Math.trunc(Math.random() * 20);
  user.score = 20;
  scoreMsg.textContent = user.score;
  highScoreMsg.textContent = 0;
  correctNumber.textContent = '?';
  back.style.backgroundColor = '#0b1c47';
  inputValue.style.backgroundColor = '#0b1c47';
  againBtn.style.color = '#0b1c47';
  correctNumber.style.color = '#0b1c47';
  checkBtn.style.color = '#0b1c47';
  rateMsg.textContent = 'Start guessing...';
});
