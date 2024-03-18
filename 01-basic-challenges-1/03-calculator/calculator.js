// Define a functinat called calculator that takes 2 numbers and 1 operator sign
// Goal: Return the result of the calculation
// Conditions: - The function must return a number
//             - The function must return a console log if an invalid operator is given

const calculator = (a, b, operator) => {
  switch (operator) {
    case '+':
      return a + b;
      break;

    case '-':
      return a - b;
      break;

    case '*':
      return a * b;
      break;

    case '/':
      return a / b;
      break;

    default:
      return console.log(`Invalid operator ${operator}`);
      break;
  }
};

module.exports = calculator;
