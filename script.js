const frontElt = document.querySelector('.front');
const numberFlipper = document.querySelector('.flipper');

function playErrorAnimation() {
  frontElt.classList.add('error-animation');
  setTimeout(() => {
    frontElt.classList.remove('error-animation');
  }, 400);
}

function revealSecretNumber() {
  numberFlipper.classList.add('reveal');
}

function onCheckBtnClick() {
  playErrorAnimation();
  //revealSecretNumber();
}