const frontElt = document.querySelector('.front');
const numberFlipper = document.querySelector('.flipper');
const donkeyImageElt = document.querySelector('.donkey-image');
const numberElt = document.querySelector('.number');

const donkeyAudio = new Audio('assets/donkey.mp3');

function playErrorAnimation() {
  frontElt.classList.add('error-animation');
  setTimeout(() => {
    frontElt.classList.remove('error-animation');
  }, 400);
}

function playLostAnimation() {
  numberElt.classList.add("hide");
  donkeyImageElt.classList.add("show");
  donkeyAudio.play();
}

function revealSecretNumber() {
  numberFlipper.classList.add('reveal');
}

// mes super animations

//playErrorAnimation();
//revealSecretNumber();
// playLostAnimation();

const scoreELt = document.querySelector(".score");
scoreELt.textContent = '30';

numberElt.textContent = "😂";