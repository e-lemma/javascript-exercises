const findTheOldest = function (array) {
  const currentYear = new Date().getFullYear();

  let oldestName = "";
  let oldestAge = 0;

  array.forEach((person) => {
    if (person.yearOfDeath) {
      currentAge = person.yearOfDeath - person.yearOfBirth;
    } else {
      currentAge = currentYear - person.yearOfBirth;
    }

    if (currentAge > oldestAge) {
      oldestAge = currentAge;
      oldestName = person.name;
    }
  });
  return array.find(({ name }) => name === oldestName);
};

// Do not edit below this line
module.exports = findTheOldest;
