const inputName = document.getElementById("inputName");
const outputName = document.getElementById("outputName");

inputName.addEventListener("input", () => {
  checkLetter();
});

function checkLetter() {
  let result = inputName.value.split("");
  let count = 0;
  result.forEach((element) => {
    if (
      element == "a" ||
      element == "o" ||
      element == "u" ||
      element == "e" ||
      element == "i"
    )
      count++;
  });
  outputName.innerHTML = count;
}
