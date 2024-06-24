// connecting html to JS
// declaring variables which contain dom element
// spliting input value
// checking if each letter is a vocal
// printing the result
const inputName = document.getElementById("inputName");
const outputName = document.getElementById("outputName");

inputName.addEventListener("input", () => {
  checkLetter();
});

const checkLetter = () => {
  let result = inputName.value.split("");
  let letters = "Vocals: ";
  result.forEach((letter) => {
    switch (letter) {
      case "a":
        letters += "a";
        break;
      case "o":
        letters += "o";
        break;
      case "u":
        letters += "u";
        break;
      case "e":
        letters += "e";
        break;
      case "i":
        letters += "i";
        break;
    }
    outputName.innerHTML = letters;
  });
};
