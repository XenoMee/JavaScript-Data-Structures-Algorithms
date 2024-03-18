// Define: Function called titleCase that takes a string
// Goal: Return the string with the first letter of each word capitalized.
// Condition: You may assume that each word consists of only letters and spaces

// Plan:
// 1. Lowercase the given string
// 2. Take each word of the string and place it inside an array
// 3. Itterate through the array of words
// 4. Uppercase the first letter of each word and concatenate with the rest of the string
// 5. Store the result in a modified string variable
// 6. Return the modified string

function titleCase(str) {
  const words = str.toLowerCase().split(' ');
  let modifiedString = [];
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    modifiedString.push(word.charAt(0).toUpperCase() + word.slice(1));
  }

  return modifiedString.join(' ');
}

module.exports = titleCase;
