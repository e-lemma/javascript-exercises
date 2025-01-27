const repeatString = function (string, num) {
  let repeated = "";
  if (num < 0) {
    return "ERROR";
  }
  for (num; num > 0; num--) {
    repeated += string;
  }
  return repeated;
};

// Do not edit below this line
module.exports = repeatString;
