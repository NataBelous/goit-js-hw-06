const categoriesItem = document.querySelectorAll('.item');
console.log(' Number of categories: ', categoriesItem.length);
categoriesItem.forEach(item => {
  const categoriesName = item.querySelector('h2');
  const categoriesEl = item.querySelectorAll('li');
  console.log(` Category: ${categoriesName.textContent} \n Elements: ${categoriesEl.length}`);

})

