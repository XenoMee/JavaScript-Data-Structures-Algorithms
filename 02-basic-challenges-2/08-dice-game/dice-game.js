// Goal: Return an array of objects, each object representing
// a simulation result

// Create 2 random numbers between 1 and 6
// Create the object with the mentioned properties

function diceGameSimulation(num) {
  const simulationsArr = [];

  for (let i = 0; i < num; i++) {
    const dice1 = Math.floor(Math.random() * 6) + 1;
    const dice2 = Math.floor(Math.random() * 6) + 1;
    const sum = dice1 + dice2;
    let result = '';

    if (sum === 7 || sum === 11) result = 'win';
    else if (sum === 12 || sum === 2 || sum === 3) result = 'lose';
    else result = 'roll again';

    simulationsArr.push({ dice1, dice2, sum, result });
  }

  return simulationsArr;
}

module.exports = diceGameSimulation;
