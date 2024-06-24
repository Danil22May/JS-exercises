function str_revert(string) {
  string = string.trim();
  words = string.split(" ");
  let temp = words[0];
  words[0] = words[1];
  words[1] = temp;
  string = words.join(" ");
  return string;
}

console.log(str_revert("   Hello world   "));
