const reverseString = function (string) {
  let result = "";
  for (let i = 0; i <= string.length - 1; i++) {
    let letter = string[i];
    result = letter + result;
  }
  return result;
};

// Do not edit below this line
module.exports = reverseString;
