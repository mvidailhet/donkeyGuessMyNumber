const frontElt = document.querySelector(".front");
const numberFlipper = document.querySelector(".flipper");

const messageElt = document.querySelector(".message");
const inputElt = document.querySelector(".guess");
const scoreElt = document.querySelector(".score");

// https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const secretNumber = randomIntFromInterval(1, 20);
const gameIsFinished = false;

function playErrorAnimation() {
  frontElt.classList.add("error-animation");
  setTimeout(() => {
    frontElt.classList.remove("error-animation");
  }, 400);
}

function revealSecretNumber() {
  numberFlipper.classList.add("reveal");
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
    return;
  }

  if (guess === secretNumber) {
    messageElt.textContent = "Tu as gagné !";
    gameIsFinished = true;
    return;
  } else if (guess < secretNumber) {
    messageElt.textContent = "Trop petit !";
  } else {
    messageElt.textContent = "Trop grand !";
  }

  let score = Number(scoreElt.textContent);
  score -= 1;
  scoreElt.textContent = score;

  if (score === 0) {
    messageElt.textContent = "Tu as perdu !";
    gameIsFinished = true;
  }
}

//playErrorAnimation();
//revealSecretNumber();
