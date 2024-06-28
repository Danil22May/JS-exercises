const calc = (num1, num2, sign) => {
  const signList = ["+", "/", "*", "-"];
  if (
    typeof num1 == "number" &&
    typeof num2 == "number" &&
    signList.includes(sign)
  ) {
    let result = num1 + sign + num2;
    console.log(eval(result));
  } else {
    console.log("unknown value");
  }
};
calc(1, 3, "+");
