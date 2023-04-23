const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

const enteredName = () => {
  return nameInput.value === ""
    ? (nameOutput.textContent = "Anonymous")
    : (nameOutput.textContent = nameInput.value);
};

nameInput.addEventListener("input", enteredName);
