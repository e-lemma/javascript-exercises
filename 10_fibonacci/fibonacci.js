const fibonacci = function (desiredMemberPosition) {
  desiredMemberPosition = Number(desiredMemberPosition);
  if (!Number.isInteger(desiredMemberPosition) || desiredMemberPosition < 0) {
    return "OOPS";
  }
  if (desiredMemberPosition == 0) return 0;

  let firstNum = 0;
  let secondNum = 1;

  for (let i = 1; i < desiredMemberPosition; i++) {
    let nextNum = firstNum + secondNum;
    firstNum = secondNum;
    secondNum = nextNum;
  }

  return secondNum;
};

// Do not edit below this line
module.exports = fibonacci;
