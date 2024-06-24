// connecting html to JS
// declaring variables which contain dom element
// spliting input value
// checking if each letter is equals to a vocal
// printing the result
const inputName = document.getElementById("inputName");
const outputName = document.getElementById("outputName");
const submitBtn = document.getElementById("submitBtn");
const letters = {
  a: 0,
  o: 0,
  u: 0,
  e: 0,
  i: 0,
};

submitBtn.addEventListener("click", () => {
  checkLetter();
});

inputName.addEventListener("input", () => {
  outputName.innerHTML = "";
  for (let letter in letters) {
    letters[letter] = 0;
  }
});
function checkLetter() {
  let result = inputName.value.split("");
  result.forEach((element) => {
    switch (element) {
      case "a":
        letters.a++;
        break;
      case "o":
        letters.o++;
        break;
      case "u":
        letters.u++;
        break;
      case "e":
        letters.e++;
        break;
      case "i":
        letters.i++;
        break;
    }
  });
  outputName.innerHTML = `a: ${letters.a} o: ${letters.o} e: ${letters.e} i: ${letters.i} u: ${letters.u}`;
}
