// connecting html to JS
// declaring variables which contain dom element
// spliting input value
// checking if each letter is equals to a vocal
// printing the result
const inputNum = document.getElementById("inputNum");
const outputNum = document.getElementById("outputNum");

const numbers = {
  2: false,
  3: false,
  5: false,
  7: false,
};

inputNum.addEventListener("input", () => {
  checkNumber();
});

const checkNumber = () => {
  let number = Number(inputNum.value);
  console.log(typeof number);
  if (number != 0) {
    for (item in numbers) {
      item = Number(item);
      if (number % item == 0) {
        numbers[item] = true;
      }
    }
  } else {
    for (item in numbers) {
      numbers[item] = false;
    }
  }

  outputNum.innerHTML = `Is divisible by 2: ${numbers[2]} | Is divisible by 3: ${numbers[3]} | Is divisible by 5: ${numbers[5]} | Is divisible by 7: ${numbers[7]}`;
};
