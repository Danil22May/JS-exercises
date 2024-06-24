// connecting html to JS
// declaring variables that contain dom element
// spliting input value
// checking if each letter is equals to letter "a"
// printing the result
const inputName = document.getElementById("inputName");
const outputName = document.getElementById("outputName");

inputName.addEventListener("input", () => {
  checkLetter();
});

function checkLetter() {
  let result = inputName.value.split("");
  let count = 0;
  result.forEach((element) => {
    if (element == "a") count++;
  });
  outputName.innerHTML = count;
}
