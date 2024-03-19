// Define: a function called findMissingLetter that takes as parameter an array of consecutive letters
// Goal: Return the missing letter

const findMissingLetter = (letters) => {
  let start = letters[0].charCodeAt(0);
  for (let i = 1; i < letters.length; i++) {
    const current = letters[i].charCodeAt(0);
    if (current - start > 1) return String.fromCharCode(start + 1);
    start = current;
  }
  return '';
};

module.exports = findMissingLetter;
