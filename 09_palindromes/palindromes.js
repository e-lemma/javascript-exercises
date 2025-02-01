const palindromes = function (string) {
  const disregard = [" ", "!", ",", "."];

  const cleaned = string
    .toLowerCase()
    .split("")
    .filter((char) => !disregard.includes(char))
    .join("");

  const reversed = cleaned.split("").reverse().join("");

  return cleaned === reversed;
};

// Do not edit below this line
module.exports = palindromes;
