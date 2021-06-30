// Code your solution here

const findMatching = (array, string) =>
  array.filter((driver) => driver.toLowerCase() === string);

console.log(findMatching(drivers));

function fuzzyMatch(drivers, string) {
  return drivers
    .map((driver) => driver.split())
    .filter((driver) => driver[0] === string);
}

function matchName(drivers, string) {
  return drivers.filter((driver) => driver.name === string);
}
