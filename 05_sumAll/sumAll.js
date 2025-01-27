/*
determine the smaller of the two
start from that int, increment up
adding each number to a sum var
until bigger of two reached inclusive
then return sum var
*/

const sumAll = function (int1, int2) {
  for (const int of [int1, int2]) {
    if (int < 0 || !Number.isInteger(int)) {
      return "ERROR";
    }
  }
  let startInt = Math.min(int1, int2);
  let endInt = Math.max(int1, int2);
  let sum = 0;
  for (startInt; startInt <= endInt; startInt++) {
    sum += startInt;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
