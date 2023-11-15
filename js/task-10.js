const createBtn = document.querySelector('[data-action="create"]');
const destroyBtn = document.querySelector('[data-action="destroy"]');
const boxes = document.querySelector("#boxes");
const input = document.querySelector("#controls input");

let initialBoxSize = 30;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    const newBox = document.createElement("div");
    boxes.appendChild(newBox);

    newBox.style.width = `${initialBoxSize}px`;
    newBox.style.height = `${initialBoxSize}px`;
    newBox.style.backgroundColor = getRandomHexColor();

    initialBoxSize += 10;
  }
}

function destroyBoxes() {
  boxes.innerHTML = "";
  initialBoxSize = 30;
}

createBtn.addEventListener("click", () => createBoxes(input.value));
destroyBtn.addEventListener("click", destroyBoxes);
