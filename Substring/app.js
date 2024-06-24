const string = "ksdnkasndasEnGliShzxcgb123rg";
const substring = "english";

function isIncluded(string, substring) {
  return string.toLowerCase().includes(substring);
}
console.log(isIncluded(string, substring));
