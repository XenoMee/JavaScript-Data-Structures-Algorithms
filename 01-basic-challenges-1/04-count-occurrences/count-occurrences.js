// Define: Function called countOccurences that takes a string and a character
// Goal: Return the number of occurrences of that character in the string
// Condition: Lowercase and uppercase characters are considered different characters.

// 1. Define a count variable that increments everytime the given character is encountered
// 2. Itterate through the string characters
// 3. Compare each character with the given character
// 4. Increment the count variable
// 5. Return the count

const countOccurrences = (string, character) =>
  string.split(character).length - 1;

module.exports = countOccurrences;
