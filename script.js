const frontElt = document.querySelector(".front");
const numberFlipper = document.querySelector(".flipper");

const messageElt = document.querySelector(".message");
const inputElt = document.querySelector(".guess");
const scoreElt = document.querySelector(".score");
const highscoreElt = document.querySelector('.highscore');
const secretNumberElt = document.querySelector('.secret-number');

resetGame();

// https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function playErrorAnimation() {
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
    return;
  }

  let score = Number(scoreElt.textContent);

  if (guess === secretNumber) {
    messageElt.textContent = "Tu as gagné !";
    document.body.classList.add('win-background');
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
    document.body.classList.add('loose-background');
    gameIsFinished = true;
  }
}

function resetGame() {
  hideSecretNumber();
  messageElt.textContent = "Commence à deviner...";
  document.body.classList.remove('loose-background');
  document.body.classList.remove('win-background');
  secretNumber = randomIntFromInterval(1, 20);
  gameIsFinished = false;
  scoreElt.textContent = '20';
  inputElt.value = '';
  console.log('secret', secretNumber);
  secretNumberElt.textContent = secretNumber;
}


