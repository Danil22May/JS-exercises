// connecting html to JS
// calculating input values from representing variables
// printing result on screen

const result = document.getElementById("output");
const submitBtn = document.getElementById("submit");
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");

let printSum = function () {
  let result = `${num1.value} + ${num2.value}`;
  result = eval(result);
  output.innerText = `La suma de ${num1.value} + ${num2.value} es ${result}`;
};
submitBtn.addEventListener("click", () => {
  printSum();
});
