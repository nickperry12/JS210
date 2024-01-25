/*

Write a function that takes a sorted array of integers as an argument, and
returns an array that includes all the missing integers (in order) between the
first and last elements of the argument.

Set `min` to the first element of the array
Set `max` to the last element of the array
Set `range` to all of the numbers from `min` to `max`
Set `missingNums` to an empty array

Iterate through `range`
- If the given array contains the current element, move onto next iteration
- If not, add that element to `missingNums`

Return `missingNums`
*/

function missing(array) {
  let min = array[0];
  let max = array[array.length - 1];
  let range = [];
  let missingNums = [];

  for (let num = min; num <= max; num += 1) {
    range.push(num);
  }

  for (let index = 0; index < range.length; index += 1) {
    if (!array.includes(range[index])) {
      missingNums.push(range[index]);
    }
  }

  return missingNums;
}

console.log(missing([-3, -2, 1, 5]));                  // [-1, 0, 2, 3, 4]
console.log(missing([1, 2, 3, 4]));                    // []
console.log(missing([1, 5]));                          // [2, 3, 4]
console.log(missing([6]));                             // []