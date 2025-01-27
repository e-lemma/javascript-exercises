const convertToCelsius = function (tempInFahrenheit) {
  convertedTemp = (tempInFahrenheit - 32) * (5 / 9);
  return Math.round(convertedTemp * 10) / 10;
};

const convertToFahrenheit = function (tempInCelsius) {
  convertedTemp = tempInCelsius * (9 / 5) + 32;
  return Math.round(convertedTemp * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
