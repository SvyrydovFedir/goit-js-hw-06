const validationInput = document.querySelector("#validation-input");

const loseFocus = () => {
  if (validationInput.value.length === Number(validationInput.dataset.length)) {
    validationInput.classList.add("valid");
    validationInput.classList.remove("invalid");
  } else {
    validationInput.classList.add("invalid");
    validationInput.classList.remove("valid");
  }
};

validationInput.addEventListener("blur", loseFocus);

console.log(validationInput);
