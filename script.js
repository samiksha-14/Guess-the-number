'use strict';
// creating a secret random number which user will enter
let secretNum = Math.trunc(Math.random() * 20) + 1; // between 1-20
let score = 20; //initial score //state variable
let highscore = 0;
// document.querySelector('.number').textContent = secretNum;
document.querySelector('.check').addEventListener('click', function () {
  /// type casted to a number bec the num that user enter will be automatically be a string
  const guess = Number(document.querySelector('.guess').value);
  //console.log(guess);
  // if user has not entered any number
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number🤦‍♂️';
  }
  ///correct number
  else if (guess === secretNum) {
    document.querySelector('.message').textContent = 'Yay!! Correct 🎉🎁';
    document.querySelector('.number').textContent = secretNum;
    //manipulating css a
    document.querySelector('body').style.backgroundColor = 'rgb(89, 138, 115)';
    document.querySelector('.number').style.width = '26rem';
    //updating highscore on winning
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNum) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNum ? 'too high 🥱' : 'too low 🙂';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        'YOU LOSE..!BETTER LUCK NEXT TIME BUDDY!😉';
      document.querySelector('.score').textContent = 0;
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  //new secret number when page reload
  score = 20; //score again will get set to 20 when clicking again
  secretNum = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  //changing msg back to previous
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = 20;
  document.querySelector('body').style.backgroundColor = 'rgb(86, 114, 116)';
  //CHANGING STYLES BACK TO PREVIOUS
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
