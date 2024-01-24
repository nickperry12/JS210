/*

Write a function named push that accepts two arguments: an Array and any other
value. The function should append the second argument to the end of the Array,
and return the new length of the Array.

*/

function push(array, value) {
  let nextIndex = array.length;

  array[nextIndex] = value;

  return array.length;
}

let array = [1, 2, 3];

console.log(push(array, 4));
console.log(array);