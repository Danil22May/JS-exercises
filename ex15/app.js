const inputNum = document.getElementById("inputNum");
const outputNum = document.getElementById("outputNum");
const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", () => {
  calc();
});

const calc = () => {
  const num = Number(inputNum.value);
  if (num <= 1) {
    outputNum.innerHTML = "false";
    return;
  }

  let isPrime = true;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    outputNum.innerHTML = "true";
  } else {
    outputNum.innerHTML = "false";
  }
};
