/*

Write a function named slice that accepts three arguments: an Array, a start
index, and an end index. The function should return a new Array that contains
values from the original Array starting with the value at the starting index,
and including all values up to but not including the end index. Do not modify
the original Array.

You may use functions that were answers to previous practice problems to
complete this problem, but do not use any built-in Array methods.

Write a function named splice that accepts three arguments: an Array, a start
index, and the number of values to remove. The function should remove values
from the original Array, starting with the start index and removing the
specified number of values. The function should return the removed values in a
new Array.

You may use functions that were answers to previous practice problems to
complete this problem, but do not use any built-in Array methods

*/

function splice(array, start, amount) {
  let removedValues = [];

  for (index = start; index < array.length; index += 1) {
    if (index < start + amount) {
      push(removedValues, array[index]);
    }

    array[index] = array[index + amount];
  }

  array.length -= amount;
  return removedValues;
}

function slice(array, start, end){
  let newArray = [];

  for (index = start; index < end; index += 1) {
    push(newArray, array[index]);
  }

  return newArray;
}

function push(array, value) {
  let nextIndex = array.length;

  array[nextIndex] = value;

  return array.length;
}

function indexOf(array, value) {
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === value) return index;
  }

  return -1;
}

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

function concat(array, secondArray) {
  let combinedArray = [];

  for (let index = 0; index < array.length; index += 1) {
    push(combinedArray, array[index]);
  }

  for (let index = 0; index < secondArray.length; index += 1) {
    push(combinedArray, secondArray[index]);
  }

  return combinedArray;
}

function join(array, delimiter) {
  let string = ''

  for (let index = 0; index < array.length; index += 1) {
    if (index === array.length - 1) {
      string += String(array[index]);
    } else {
      string += String(array[index]) + delimiter;
    }
  }

  return string;
}

console.log(join(['bri', 'tru', 'wha'], 'ck '));