// Define: Function called reverseString that takes a string
// Goal: Retrun the reverse of that string
// Conditions: The input string will only containt lowercase letters and spaces

// Plan:
// 1. Itterate through the string characters backwards
// 2.

function reverseString(str) {
  let reverseString = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reverseString += str[i];
  }
  return reverseString;
}

module.exports = reverseString;
