const frontElt = document.querySelector(".front");
const numberFlipper = document.querySelector(".flipper");

const inputELt = document.querySelector(".guess");
const messageELt = document.querySelector(".message");

function onCheckButtonClick() {
  if (inputELt.value === "") {
    messageELt.textContent = "Il faut préciser un nombre !";
  }
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
