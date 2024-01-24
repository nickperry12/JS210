/*

Write a function named pop that accepts one argument: an Array. The function
should remove the last element from the array and return it

*/

function pop(array) {
  if (array.length === 0) return undefined;

  let newLength = array.length - 1;
  let lastValue = array[array.length - 1];
  array.length = newLength;
  return lastValue;
}

let array = [];

console.log(pop(array));
console.log(array);