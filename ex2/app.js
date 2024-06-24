const app = document.getElementById("app");
const num1 = 5;
const num2 = 3;

let printSum = function(num1, num2){
    let result = num1 + num2;
    app.innerHTML = `La suma de 3 + 5 es ${result}`;
}
printSum(num1, num2);