// Goal: Return the number of vowels in the string

function countVowels(str) {
  const formattedString = str.toLowerCase();
  let count = 0;
  for (let i = 0; i < formattedString.length; i++) {
    const char = formattedString[i];
    switch (char) {
      case 'a':
        count += 1;
        break;
      case 'e':
        count += 1;
        break;
      case 'i':
        count += 1;
        break;
      case 'o':
        count += 1;
        break;
      case 'u':
        count += 1;
        break;

      default:
        console.log(char);
    }
  }
  return count;
}

module.exports = countVowels;
