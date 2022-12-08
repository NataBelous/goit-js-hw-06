const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients');

ingredients.forEach(ingredient => {
  const ingredientsItem = document.createElement('li');
  ingredientsItem.className = 'item';
  ingredientsItem.textContent = ingredient;
  ingredientsList.appendChild(ingredientsItem);
})
