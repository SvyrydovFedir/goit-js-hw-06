const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");
const listElements = [];

ingredients.forEach((ingredient) => {
  const listElement = document.createElement("li");
  listElement.classList.add("item");
  listElement.textContent = ingredient;

  listElements.push(listElement);
});

ingredientsList.append(...listElements);
