const nameInput = document.querySelector("#name-input");
const spanOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", (event) => {
    const inputValue = event.currentTarget.value.trim();
    if (inputValue === "") {
        spanOutput.textContent = "Anonymous";
    } else {
        spanOutput.textContent = inputValue;
    }
})

