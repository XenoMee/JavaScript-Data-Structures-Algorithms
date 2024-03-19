// Define: 2 arrays as parameters
// Goal: Return an array containing the intersection of the two arrays

function arrayIntersection(arr1, arr2) {
  const commonArray = [];
  arr1.forEach((el) => {
    if (arr2.includes(el) && !commonArray.includes(arr1[el]))
      commonArray.push(el);
  });
  return commonArray;
}

module.exports = arrayIntersection;
