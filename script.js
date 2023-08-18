const frontElt = document.querySelector(".front");
const numberFlipper = document.querySelector(".flipper");

const inputELt = document.querySelector(".guess");
const messageELt = document.querySelector(".message");

const scoreElt = document.querySelector(".score");

const secretNumber = 10;

function onCheckButtonClick() {
  if (inputELt.value === "") {
    messageELt.textContent = "Il faut préciser un nombre !";
  } else {
    const guess = Number(inputELt.value);

    if (isNaN(guess)) {
      messageELt.textContent = "Ceci n'est pas un nombre !";
    }

    if (guess === secretNumber) {
      messageELt.textContent = '🎉🎉🎉 Bravo !';
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
