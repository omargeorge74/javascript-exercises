const sumAll = function (first, second) {
  let sum = 0;
  if (first < 0 || second < 0) {
    return "ERROR";
  }
  if (!Number.isInteger(first) || !Number.isInteger(second)) {
    return "ERROR";
  }
  let min = Math.min(first, second);
  let max = Math.max(first, second);

  for (let i = min; i <= max; i++) {
    sum = sum + i;
  }

  console.log(sum);
  return sum;
};

sumAll(2.5, 4);
// Do not edit below this line
module.exports = sumAll;
