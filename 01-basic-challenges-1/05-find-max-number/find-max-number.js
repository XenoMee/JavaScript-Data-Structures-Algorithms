// Define: Function called findMaxNumber that takes an array of numbers as a parameter
// Goal: Return the largest number in that array
// Condition: The function must return a number

// Plan:
//
// 1. Create a maxNumber variable
// 2. Itterate through the array

const findMaxNumber = (arr) => {
  let maxNumber = 0;
  arr.forEach((number) => {
    if (number > maxNumber) maxNumber = number;
  });
  return maxNumber;
};
module.exports = findMaxNumber;
