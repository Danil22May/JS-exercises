// connecting html to JS
// comparing input values from representing variables
// printing result on screen

const result = document.getElementById("output");
const submitBtn = document.getElementById("submit");
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const num3 = document.getElementById("num3");

let compareNum = function () {
  let maxNum = Math.max(num1.value, num2.value, num3.value);
  output.innerText = maxNum + " Es el mayor";
};
submitBtn.addEventListener("click", () => {
  compareNum();
});
