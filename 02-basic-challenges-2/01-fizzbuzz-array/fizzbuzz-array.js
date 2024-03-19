// Goal: Return an array of a given number length

// Plan:
// 1. Create an empty array variable
// 2.

function fizzBuzzArray(n) {
  const numbersArray = [];
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) numbersArray.push('FizzBuzz');
    else if (i % 3 === 0) numbersArray.push('Fizz');
    else if (i % 5 === 0) numbersArray.push('Buzz');
    else numbersArray.push(i);
  }
  return numbersArray;
}

module.exports = fizzBuzzArray;
