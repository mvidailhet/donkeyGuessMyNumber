const frontElt = document.querySelector(".front");
const numberFlipper = document.querySelector(".flipper");
const donkeyImageElt = document.querySelector(".donkey-image");
const numberElt = document.querySelector(".number");

const donkeyAudio = new Audio("assets/donkey.mp3");

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
  numberFlipper.classList.add("reveal");
}

// mes super animations

//playErrorAnimation();
//revealSecretNumber();
// playLostAnimation();

const scoreELt = document.querySelector(".score");

const inputElement = document.querySelector(".guess");

const messageElt = document.querySelector(".message");

const secretNumber = getRandomNumber(1, 20);
console.log(secretNumber);

let currentScore = 20;

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function onBtnClick() {
  if (inputElement.value === "") {
    messageElt.textContent = "Il faut préciser un nombre !";
    return;
  }
  const guess = Number(inputElement.value);

  if (isNaN(guess)) {
    console.log("This is not a number !");
    return;
  }

  if (guess < secretNumber) {
    messageElt.textContent = "Trop petit";
    currentScore -= 1;
    scoreELt.textContent = currentScore;
    return;
  }

  if (guess > secretNumber) {
    messageElt.textContent = "Trop grand";
    currentScore -= 1;
    scoreELt.textContent = currentScore;
    return;
  }

  messageElt.textContent = "gagné";

}

function onBtnClick2() {
  if (inputElement.value === "") {
    messageElt.textContent = "Il faut préciser un nombre !";
  } else {
    const guess = Number(inputElement.value);

    if (isNaN(guess)) {
      console.log("This is not a number !");
    } else {
      if (guess < secretNumber) {
        messageElt.textContent = "Trop petit";
      } else if (guess > secretNumber) {
        messageElt.textContent = "Trop grand";
      } else {
        messageElt.textContent = "gagné";
      }
    }
  }
}
