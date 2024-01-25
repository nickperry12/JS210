/*

Write a function that creates and returns a new array from its array argument.
The new array should contain all values from the argument array whose positions
have an odd index.

*/

function oddElementsOf(array) {
  let oddElements = [];
  let length = arr.length;

  for (let index = 1; index < length; index += 2); {
    oddElements.push(array[index]);
  }

  return oddElements;
}

let digits = [4, 8, 15, 16, 23, 42];

console.log(oddElementsOf(digits));    // returns [8, 16, 42]