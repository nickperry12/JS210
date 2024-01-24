/*

Write a function named unshift that accepts two arguments: an Array and a value.
The function should insert the value at the beginning of the Array, and return
the new length of the array. You will need a for loop for this problem.

*/

function unshift(array, value) {
  for (index = array.length; index > 0; index -= 1) {
    array[index] = array[index - 1];
  }

  array[0] = value;
  return array.length;
}

let arr = [2, 3, 4];

console.log(unshift(arr, 1)); // should return 4
console.log(arr); // should return [1, 2, 3, 4]