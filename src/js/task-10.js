function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const boxesRef = document.querySelector('#boxes');

function createBoxes(amount) {
  const boxes = [];
  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement('div');
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.push(box);
  }
  boxesRef.append(...boxes);
}

function destroyBoxes() {
  boxesRef.innerHTML = '';
}

const inputRef = document.querySelector('input');
const renderBtnRef = document.querySelector('button[data-create]');
const destroyBtnRef = document.querySelector('button[data-destroy]');

destroyBtnRef.addEventListener('click', destroyBoxes);
renderBtnRef.addEventListener('click', () => createBoxes(inputRef.value));
