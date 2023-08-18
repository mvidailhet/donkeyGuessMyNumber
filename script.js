const frontElt = document.querySelector(".front");
const numberFlipper = document.querySelector(".flipper");

const inputELt = document.querySelector(".guess");
const messageELt = document.querySelector(".message");

const scoreElt = document.querySelector(".score");

function randomNumber(min, max) {
 return Math.floor(Math.random() * (max - min + 1)) + min;
}

const secretNumber = randomNumber(1, 20);
console.log(secretNumber);

function onCheckButtonClick() {

  inputELt.style.width = '50rem';

  if (inputELt.value === "") {
    messageELt.textContent = "Il faut préciser un nombre !";
  } else {
    const guess = Number(inputELt.value);

    if (isNaN(guess)) {
      messageELt.textContent = "Ceci n'est pas un nombre !";
    }

    if (guess === secretNumber) {
      messageELt.textContent = '🎉🎉🎉 Bravo !';
      const bodyElt = document.querySelector('body');
      bodyElt.style.backgroundColor = 'green';
      const secretNumberElt = document.querySelector('.secret-number');
      secretNumberElt.textContent = secretNumber;

      revealSecretNumber();
    } else if(guess < secretNumber) {
      messageELt.textContent = 'Trop petit !';
      decreaseScore();
    } else {
      messageELt.textContent = 'Trop grand !';
      decreaseScore();
    }

    let score = Number(scoreElt.textContent);
    if (score === 0) {
      messageELt.textContent = "Tu as perdu !";
      const bodyElt = document.querySelector('body');
      bodyElt.style.backgroundColor = '#da2222';
    }
  }
}

function decreaseScore() {
  let score = Number(scoreElt.textContent);
  score -= 1;
  scoreElt.textContent = score.toString();
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

// mes super animations

//playErrorAnimation();
//revealSecretNumber();
