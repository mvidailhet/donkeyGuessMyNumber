const frontElt = document.querySelector(".front");
const numberFlipper = document.querySelector(".flipper");

const messageElt = document.querySelector(".message");
const inputElt = document.querySelector(".guess");
const scoreElt = document.querySelector(".score");
const highscoreElt = document.querySelector(".highscore");
const secretNumberElt = document.querySelector(".secret-number");
const donkeyImageElt = document.querySelector(".donkey-image");
const numberElt = document.querySelector(".number");

const donkeyAudio = new Audio("assets/donkey.mp3");

let userGuesses = [];

let secretNumber;

let currentMiddleCircleText = "🤫";

resetGame();

// https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function playLostAnimation() {
  numberElt.classList.add("hide");
  donkeyImageElt.classList.add("show");
  donkeyAudio.play();
}

function changeMiddleCircleTextForNMilliseconds(text, milliseconds = 800) {
  currentMiddleCircleText = numberElt.textContent;
  numberElt.textContent = text;
  setTimeout(() => {
    numberElt.textContent = currentMiddleCircleText;
  }, milliseconds);
}

function playErrorAnimation() {
  changeMiddleCircleTextForNMilliseconds("😡", 800);
  frontElt.classList.add("error-animation");
  setTimeout(() => {
    frontElt.classList.remove("error-animation");
  }, 400);
}

function revealSecretNumber() {
  numberFlipper.classList.add("reveal");
}

function hideSecretNumber() {
  numberFlipper.classList.remove("reveal");
}

function onCheckBtnClick() {
  if (gameIsFinished) return;

  const guessStr = inputElt.value;

  if (guessStr.trim() === "") {
    messageElt.textContent = "Aucun nombre renseigné";
    return;
  }

  const guess = Number(guessStr);
  if (isNaN(guess)) {
    messageElt.textContent = "Ceci n'est pas un nombre";
    changeMiddleCircleTextForNMilliseconds('🤦‍♂️');
    return;
  }

  if (guess < 1 || guess > 20) {
    messageElt.textContent = "Ce nombre n'est pas entre 1 et 20";
    changeMiddleCircleTextForNMilliseconds('🤦‍♂️');
    return;
  }

  if (userGuesses.includes(guess)) {
    messageElt.textContent = "Tu as déjà essayé de deviner ce nombre";
    changeMiddleCircleTextForNMilliseconds('🤷‍♂️');
    return;
  }

  userGuesses.push(guess);

  let score = Number(scoreElt.textContent);

  if (guess === secretNumber) {
    messageElt.textContent = "Tu as gagné !";
    document.body.classList.add("win-background");
    revealSecretNumber();
    gameIsFinished = true;

    const highScore = Number(highscoreElt.textContent);
    if (score > highScore) {
      highscoreElt.textContent = score;
    }

    return;
  } else if (guess < secretNumber) {
    messageElt.textContent = "Trop petit !";
  } else {
    messageElt.textContent = "Trop grand !";
  }
  playErrorAnimation();

  score -= 1;
  scoreElt.textContent = score;

  if (score === 0) {
    messageElt.textContent = "Tu as perdu !";
    document.body.classList.add("loose-background");
    gameIsFinished = true;
    playLostAnimation();
  }
}

function resetGame() {
  hideSecretNumber();
  resetNumberCircle();
  numberElt.textContent = "🤫";
  messageElt.textContent = "Commence à deviner...";
  document.body.classList.remove("loose-background");
  document.body.classList.remove("win-background");
  secretNumber = randomIntFromInterval(1, 20);
  gameIsFinished = false;
  scoreElt.textContent = "20";
  inputElt.value = "";
  console.log("secret", secretNumber);
  secretNumberElt.textContent = secretNumber;
  userGuesses = [];
}

function resetNumberCircle() {
  donkeyImageElt.classList.remove("show");
  numberElt.classList.remove("hide");
}
