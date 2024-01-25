// indexOf and lastIndexOf

/*

Write a function indexOf that accepts two arguments: an array and a value. The
function returns the first index at which the value can be found, or -1 if the
value is not present.

*/

function indexOf(array, value) {
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === value) return index;
  }

  return -1;
}

let array = [1, 2, 3, 4, 5];

console.log(indexOf(array, 10));

/*

Write a function lastIndexOf that accepts two arguments: an array and a value.
The function returns the last index at which the value can be found in the
array, or -1 if the value is not present.

*/

function lastIndexOf(array, value) {
  let lastIndex;

  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === value) {
      lastIndex = index;
    }
  }

  if (lastIndex === undefined) {
    return -1;
  } else {
    return lastIndex;
  }
}

let newArray = [1, 2, 1, 5, 4, 3, 1, 10, 12, 7];

console.log(lastIndexOf(newArray, 100));