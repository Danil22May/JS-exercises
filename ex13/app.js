// receiveing data from html input
// calculate all the divisors of given number
// ouput the result
const inputNum = document.getElementById("inputNum");
const outputNum = document.getElementById("outputNum");
const submitBtn = document.getElementById("submitBtn");

inputNum.addEventListener("input", () => {
  outputNum.innerHTML = "";
  divisors = "Number is divisible by:";
});
submitBtn.addEventListener("click", () => {
  checkNumber();
});
let divisors = "Number is divisible by:";
const checkNumber = () => {
  let number = Number(inputNum.value);
  for (let i = 1; i <= number; i++) {
    if (number % i == 0) {
      divisors += " " + i + ";";
    }
  }
  outputNum.innerHTML = divisors;
};
