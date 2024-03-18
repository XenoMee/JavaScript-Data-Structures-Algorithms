// Goal: Return a new array with duplicates removed
// Conditions: The array can contain any data type

// Plan:
// 1. Create an empty array
// 2. Itterate through the passed array elements
// 3. Check if the elements is in the empty array
// 4. Add the elements if it doesn't exist
// 5. Return the new array

function removeDuplicates(arr) {
  const noDuplicatesArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (!noDuplicatesArray.includes(arr[i])) {
      noDuplicatesArray.push(arr[i]);
    }
  }
  return noDuplicatesArray;
}

module.exports = removeDuplicates;
