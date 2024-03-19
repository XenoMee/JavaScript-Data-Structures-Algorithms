// Define: an array of unique numbers from 1 to n (inclusive) where 1 number is missing.
// Goal: Return the missing number

// Plan:
// 1. Calculate the sum of all the numbers inside the array
// 2. Calculate the sum of the numbers from 1 to n (inclusive)

function findMissingNumber(numbers) {
  if (numbers.length === 0) return 1;

  const length = numbers.length;
  const expectedSum = ((length + 1) * (length + 2)) / 2;

  let numbersum = 0;
  for (let i = 0; i < length; i++) {
    const number = numbers[i];
    numbersum += number;
  }

  return expectedSum - numbersum;
}

module.exports = findMissingNumber;
