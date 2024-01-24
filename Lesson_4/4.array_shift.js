/*

Write a function named shift that accepts one argument: an Array. The function
should remove the first value from the beginning of the Array and return it.

*/

function shift(array) {
  if (array.length === 0) return undefined;

  let removedValue = array[0];

  for (let index = 0; index < array.length; index += 1) {
    array[index] = array[index + 1];
  }

  array.length -= 1;
  return removedValue;
}

let array = [1, 2, 3];

console.log(shift(array));  // should log 1
console.log(array); // should log [2, 3]