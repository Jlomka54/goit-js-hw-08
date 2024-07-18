function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const changeBt = document.querySelector(".change-color");
const colorValue = document.querySelector(".color");

changeBt.addEventListener("click", e => {
  colorValue.textContent = getRandomHexColor();
  document.body.style.backgroundColor= colorValue.textContent;
});