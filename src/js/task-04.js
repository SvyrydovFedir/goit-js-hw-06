const counterValue = document.querySelector("#value");
const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');

counterValue.textContent = 0;

const decrementEvent = () => {
  return (counterValue.textContent -= 1);
};

const incrementEvent = () => {
  return (counterValue.textContent = Number(counterValue.textContent) + 1);
};

decrementButton.addEventListener("click", decrementEvent);

incrementButton.addEventListener("click", incrementEvent);
