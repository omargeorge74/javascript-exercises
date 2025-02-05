const removeFromArray = function (numbers, ...removeNumbers) {
  return numbers.filter((num) => !removeNumbers.includes(num));
};
console.log(removeFromArray([1, 2, 3, 4], 3, 2, 1));

// Do not edit below this line
module.exports = removeFromArray;
