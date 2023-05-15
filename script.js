const frontElt = document.querySelector(".front");
const numberFlipper = document.querySelector(".flipper");

const messageElt = document.querySelector(".message");
const inputElt = document.querySelector(".guess");

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
  const guessStr = inputElt.value;

  if (guessStr.trim() === "") {
    messageElt.textContent = "Aucun nombre renseigné";
    return;
  }
}

//playErrorAnimation();
//revealSecretNumber();
