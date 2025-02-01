const fibonacci = function (desiredMemberPosition) {
  const fibSeq = [0];
  if (desiredMemberPosition < 0) {
    return "OOPS";
  }
  while (fibSeq.length - 1 < desiredMemberPosition) {
    if (fibSeq.length < 3) {
      let nextNum = fibSeq.reduce((sum, num) => sum + num, 1);
      fibSeq.push(nextNum);
    }
    nextNum = fibSeq.slice(-2).reduce((sum, num) => sum + num);
    fibSeq.push(nextNum);
  }
  return fibSeq.pop();
};

console.log(fibonacci(2));

// Do not edit below this line
module.exports = fibonacci;
