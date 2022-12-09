const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients');

const itemsList = ingredients.map((ingredient) => {
  const ingredientsItem = document.createElement('li');
  ingredientsItem.className = 'item';
  ingredientsItem.textContent = ingredient;
  return ingredientsItem;
})
ingredientsList.append(...itemsList);