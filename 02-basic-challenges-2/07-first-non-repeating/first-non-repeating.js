// Define: take a string as a parameter
// Goal: Return the first non-repeating character in the string

function findFirstNonRepeatingCharacter(str) {
  const charCount = {};

  for (const char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  for (const char of str) {
    if (charCount[char] === 1) return char;
  }

  return null;
}

module.exports = findFirstNonRepeatingCharacter;
