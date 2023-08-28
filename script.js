const frontElt = document.querySelector('.front');
const numberFlipper = document.querySelector('.flipper');

const bodyElt = document.querySelector('body');

const numberElt = document.querySelector('.number');
numberElt.textContent = '🤞';

const messageElt = document.querySelector('.message');
messageElt.textContent = "commençons à jouer !";

const inputElt = document.querySelector('.guess');
const scoreElt = document.querySelector('.score');
const bestScoreElt = document.querySelector('.highscore');
const secretNumber = document.querySelector('.secret-number');

let gameIsFinished = false;

function changeMessage(message){
  messageElt.textContent = message;
}

function hideSecretNumber(){
  numberFlipper.classList.remove("reveal");
}

function againBtnClick() {
  document.querySelector('body').style.backgroundColor = '#ffff';
  changeMessage("commençons à jouer !");
  inputElt.style.width = "20rem";
  numberElt.textContent = '🤞';
  inputElt.value = "";
  scoreElt.textContent = "20";
  bodyElt.classList.remove('lost');
  bodyElt.classList.remove('success');
  hideSecretNumber();
  gameIsFinished = false;

}

function newHighScore() {
  let bestScore = Number(bestScoreElt.textContent);
  let score = Number(scoreElt.textContent);
  if (bestScore < score) {
    bestScoreElt.textContent = score;
  }
}

function randomSecretNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let randomNumber = randomSecretNumber(1, 20);
console.log(randomNumber);
secretNumber.textContent = randomNumber;

function gameOver(){
  bodyElt.style.backgroundColor = '#000000'
  changeMessage('GAME OVER !!!');
  numberElt.textContent = '💀';
  gameIsFinished = true;
}

function decreaseScoreAndHandleGameOver() {
  const score = decreaseScore();
  if (score === 0) {
    gameOver();
  }
}

function decreaseScore() {
  let score = Number(scoreElt.textContent);
  score -= 1;
  scoreElt.textContent = score;
  return score;
}

function win() {
  changeMessage('Vous avez Gagné ! 😜');
  numberElt.textContent = '👍';
  bodyElt.style.backgroundColor = 'green';
  newHighScore();
  revealSecretNumber();
}

function emptyValue() {
  changeMessage('No number ! ');
  numberElt.textContent = '🤨';
  playErrorAnimation();
}

function smallerValue() {
  changeMessage('Plus petit !');
  numberElt.textContent = '😒';
  decreaseScoreAndHandleGameOver();
  playErrorAnimation();
}

function biggerValue() {
  changeMessage('Plus grand !');
  numberElt.textContent = '🙄';
  decreaseScoreAndHandleGameOver();
  playErrorAnimation();
}

function unknowValue() {
  changeMessage('This is not a number !');
  numberElt.textContent = '😖';
  playErrorAnimation();
}

function onCheckButtonClick() {

  if(gameIsFinished) return;
  inputElt.style.width = "50rem";
  if (inputElt.value === "") {
    emptyValue();
  } else {
    const guess = Number(inputElt.value);
    if (isNaN(guess)) {
      unknowValue();
    }
    else if (guess < randomNumber) {
      biggerValue()
    } else if (guess === randomNumber) {
      win();
    } else {
      smallerValue();
    }
  }
}


function playErrorAnimation() {
  frontElt.classList.add('error-animation');
  setTimeout(() => {
    frontElt.classList.remove('error-animation');
  }, 400);
}

function revealSecretNumber() {
  numberFlipper.classList.add('reveal');
}

function hideSecretNumber() {
  numberFlipper.classList.remove('reveal');
}




//playErrorAnimation();
//revealSecretNumber();