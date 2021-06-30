// Code your solution here

function findMatching(array, string) {
  return array.filter(function (driver) {
    return driver.toLowerCase() === string.toLowerCase();
  });
}

console.log(findMatching(drivers));

function fuzzyMatch(drivers, string) {
  return drivers.filter(
    (driver) => driver.substring(0, string.length) === string
  );
}

function matchName(drivers, string) {
  return drivers.filter((driver) => driver.name === string);
}
