// connecting html file to app.js
// creating input and result elements
// declaring variables from document elements
// declaring an eventlistener for input element
// assigning input value for result element

const result = document.getElementById("result");
const name2 = document.getElementById("name");
name2.addEventListener("input", () => {
  insertName();
});
function insertName() {
  result.innerHTML = name2.value;
}
