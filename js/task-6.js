function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const valuInp = document.querySelector("input");
const createBt = document.querySelector("button[data-create]");
const destroyBt = document.querySelector("button[data-destroy]");
const boxContainer = document.querySelector("#boxes");

createBt.addEventListener('click', addBoxes);
destroyBt.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  let size = 30;
  const boxes = [];

  for (let index = 0; index < amount; index++) {
    const box = `<div style="background-color:${getRandomHexColor()}; width:${size}px; height:${size}px;" ></div>`;
    size += 10;
    boxes.push(box);
  }
  boxContainer.insertAdjacentHTML('beforeend', boxes.join(''));
  
  
}


function destroyBoxes() {
  boxContainer.innerHTML = "";
}


function addBoxes() {
  if (+valuInp.value < 1 || +valuInp.value > 100) {
    return alert("Value out of range");
  }
  destroyBoxes();
  createBoxes(valuInp.value);
  valuInp.value = "";
}