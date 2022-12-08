const fontEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');
fontEl.addEventListener('input', () =>  {
  textEl.style.fontSize = `${fontEl.value}px`;
});



