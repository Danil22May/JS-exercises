// connecting html to JS
// comparing input values from representing variables
// printing result on screen

const result = document.getElementById("output");
const submitBtn = document.getElementById("submit");
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");

let compareNum = function () {
  let maxNum = Math.max(num1.value, num2.value);
  let minNum = Math.min(num1.value, num2.value);
  output.innerText = `${maxNum} > ${minNum}`;
};
submitBtn.addEventListener("click", () => {
  compareNum();
});
