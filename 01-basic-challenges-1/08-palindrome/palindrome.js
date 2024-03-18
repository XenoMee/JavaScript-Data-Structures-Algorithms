// Define: Function called isPalindrome that takes in a string
// Goal: Return true if the string is a palindrome and false if not
// Condition: The input string will only contain lowercase letters and spaces
// Condition: The function should ignore spaces when checking if the string is a palindrome

// Plan:
// 1. Format the input string to lowercase and remove non-alphanumeric characters
// 2. Create the reversed string
// 3. Return the condition value

function isPalindrome(str) {
  const formattedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  const reversed = formattedStr.split('').reverse().join('');
  return reversed === formattedStr;
}

module.exports = isPalindrome;
