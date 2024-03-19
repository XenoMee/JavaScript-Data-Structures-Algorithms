// Define: Function called displayLikes that takes in an array
// Goal: Return a string of who likes the post
// Condition: The input array will containt only strings

// Plan:
// 1.
// 2.
// 3.

function displayLikes(names) {
  const length = names.length;
  switch (length) {
    case 0:
      return 'no one likes this';
      break;
    case 1:
      return `${names[0]} likes this`;
      break;
    case 2:
      return `${names[0]} and ${names[1]} like this`;
      break;
    case 3:
      return `${names[0]}, ${names[1]} and ${names[2]} like this`;
      break;
    default:
      return `${names[0]}, ${names[1]} and ${length - 2} others like this`;
      break;
  }
}

module.exports = displayLikes;
