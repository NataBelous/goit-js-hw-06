const validInputEl = document.querySelector('#validation-input');
const inputLength = Number(validInputEl.dataset.length);

validInputEl.addEventListener('blur', () => {
  if (validInputEl.value.length === inputLength) {
    validInputEl.classList.add('valid');
    validInputEl.classList.remove('invalid');
  } else {
    validInputEl.classList.add('invalid');
    validInputEl.classList.remove('valid');
  }
});

