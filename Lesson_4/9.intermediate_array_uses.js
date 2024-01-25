/*

Write a function that creates and returns a new array from its array argument.
The new array should contain all values from the argument array whose positions
have an odd index.

*/

function oddElementsOf(array) {
  let oddElements = [];

  for (let index = 1; index < array.length; index += 2) {
    oddElements.push(array[index]);
  }

  return oddElements;
}

/*

Write a function that takes an array argument and returns a new array that
contains all the argument's elements in their original order followed by all the
argument's elements in reverse order.

*/

function mirroredArray(array) {
  let newArray = [];

  for (let index = 0; index < array.length; index += 1) {
    newArray.push(array[index]);
  }

  for (let index = array.length - 1; index >= 0; index -= 1) {
    newArray.push(array[index]);
  }

  return newArray;
}

/*

Use the array sort method to create a function that takes an array of numbers
and returns a new array of the numbers sorted in descending order. Do not alter
the original array.

*/

function sortDescending(array) {
  let sortedArray = array.slice().sort((a, b) => b - a);
  return sortedArray;
}

let array = [23, 4, 16, 42, 8, 15];
let result = sortDescending(array);
console.log(result);                 // logs    [42, 23, 16, 15, 8, 4]
console.log(array);                  // logs    [23, 4, 16, 42, 8, 15]

/*

Write a function that takes an array of arrays as an argument, and returns a new
array that contains the sums of each of the sub-arrays.

*/

function matrixSums(array) {
  let sums = [];

  for (let index = 0; index < array.length; index += 1) {
    let sum = array[index].reduce((accumulator, currentValue) => accumulator + currentValue)
    sums.push(sum);
  }

  return sums;
}

console.log(matrixSums([[2, 8, 5], [12, 48, 0], [12]]));  // returns [15, 60, 12]

/*

Write a function that takes an array, and returns a new array with duplicate
elements removed.

*/

function uniqueArray(array) {
  let unique = [];

  for (let index = 0; index < array.length; index += 1) {
    if (unique.includes(array[index])) continue;

    unique.push(array[index]);
  }

  return unique;
}

console.log(uniqueArray([1, 2, 4, 3, 4, 1, 5, 4]));