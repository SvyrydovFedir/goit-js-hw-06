const changeColorButton = document.querySelector(".change-color");
const colorName = document.querySelector(".color");
const body = document.body;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function changeBackgroundColor() {
  body.style.backgroundColor = getRandomHexColor();
  colorName.textContent = getRandomHexColor();
}

changeColorButton.addEventListener("click", changeBackgroundColor);
