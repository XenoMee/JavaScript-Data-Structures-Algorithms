// Define: a string as a parameter
// Goal: Return true or false depending whether all
// characters in the string are unique

function areAllCharactersUnique(str) {
  const uniqueStr = new Set();

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (uniqueStr.has(char)) return false;

    uniqueStr.add(char);
  }
  return true;
}

module.exports = areAllCharactersUnique;
