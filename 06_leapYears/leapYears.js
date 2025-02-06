const leapYears = function (num) {
  if (num % 4 === 0 && num % 400 === 0 && num % 100 === 0) {
    return true;
  } else if (num % 4 === 0 && num % 100 !== 0) {
    return true;
  } else if (num % 100 === 0) {
    return false;
  } else {
    return false;
  }
};
console.log(1900 % 400);
console.log(leapYears(1996));
console.log(leapYears(34992));
// Do not edit below this line
module.exports = leapYears;
