const frontElt = document.querySelector(".front");
const numberFlipper = document.querySelector(".flipper");
const donkeyImageElt = document.querySelector(".donkey-image");
const numberElt = document.querySelector(".number");
const bodyElt = document.querySelector("body");
const secretNumberElt = document.querySelector(".secret-number");
const highScoreElt = document.querySelector(".highscore");
const scoreELt = document.querySelector(".score");
const inputElement = document.querySelector(".guess");
const messageElt = document.querySelector(".message");

const donkeyAudio = new Audio("assets/donkey.mp3");

let secretNumber = getRandomNumber(1, 20);
console.log(secretNumber);

let currentScore = 20;

let isGameOver = false;
let highscore = Number(localStorage.getItem('highScore'));
highScoreElt.textContent = highscore;

function playErrorAnimation() {
  frontElt.classList.add("error-animation");
  setTimeout(() => {
    frontElt.classList.remove("error-animation");
  }, 400);
}

function playLostAnimation() {
  numberElt.classList.add("hide");
  donkeyImageElt.classList.add("show");
  donkeyAudio.play();
}

function revealSecretNumber() {
  secretNumberElt.textContent = secretNumber;
  numberFlipper.classList.add("reveal");
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function decrementScoreAndPlayErrorAnimation() {
  playErrorAnimation();
  currentScore -= 1;
  scoreELt.textContent = currentScore;
}

function handleGameIsOver() {
  if (currentScore === 0) {
    playLostAnimation();
    bodyElt.classList.add('lost');
    isGameOver = true;
  }
}

function handleGameIsWon() {
  messageElt.textContent = "gagné";
  bodyElt.classList.add('success');
  revealSecretNumber();
}

function handleHighScore() {
  if (currentScore > highscore) {
    highScoreElt.textContent = currentScore;
    highscore = currentScore;
    localStorage.setItem('highScore', highscore);
  }
}

function onBtnClick() {
  if (isGameOver) return;

  if (inputElement.value === "") {
    messageElt.textContent = "Il faut préciser un nombre !";
    return;
  }

  const guess = Number(inputElement.value);

  if (isNaN(guess)) {
    console.log("This is not a number !");
    return;
  }

  if (guess > 20 || guess < 1) {
    messageElt.textContent = "Le nombre doit être compris entre 0 et 20";
    return;
  }

  if (guess !== secretNumber) {
    decrementScoreAndPlayErrorAnimation();
    handleGameIsOver();
  }

  if (guess < secretNumber) {
    messageElt.textContent = "Trop petit";
    return;
  }

  if (guess > secretNumber) {
    messageElt.textContent = "Trop grand";
    return;
  }
  
  handleGameIsWon();
  handleHighScore();
}

function resetGame() { 
  scoreELt.textContent = '20';
  currentScore = 20;
  messageElt.textContent = 'Commence à deviner..';
  numberElt.textContent = '🤫';
  secretNumber = getRandomNumber(1, 20);
  console.log(secretNumber);
  bodyElt.classList.remove('success');
  bodyElt.classList.remove('lost');
  numberFlipper.classList.remove("reveal");

  numberElt.classList.remove("hide");
  donkeyImageElt.classList.remove("show");

  inputElement.value = '';
}