// receiveing data from html input
// calculate all the divisors of given number
// ouput the result
const inputNum = document.getElementById("inputNum");
const inputNum2 = document.getElementById("inputNum2");
const outputNum = document.getElementById("outputNum");
const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", () => {
  checkNumber();
});
let divisors = "Number is divisible by:";
const checkNumber = () => {
  outputNum.innerHTML = "";
  let number1 = Number(inputNum.value);
  let number2 = Number(inputNum2.value);
  const average = Math.min(number1, number2);
  let divisors = [];
  for (let i = 1; i <= average; i++) {
    if (number1 % i == 0 && number2 % i == 0) {
      divisors.push(i);
    }
  }
  divisors.forEach((item) => {
    outputNum.innerHTML += item + "  ";
  });
};
