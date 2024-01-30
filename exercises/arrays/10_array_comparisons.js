// Array Comparisons

/*

The array comparison function that we implemented in the Arrays lesson
(Alternate link if the previous link doesn't work) implicitly assumed that when
comparing two arrays, any matching values must also have matching index
positions. The objective of this exercise is to reimplement the function so that
two arrays containing the same values—but in a different order—are considered
equal. For example, [1, 2, 3] === [3, 2, 1] should return true.

A: 

/-- Given `arrayOne` and `arrayTwo` --/

Set `arrayOneItems` to an empty object
Set `arrayTwoItems` to an empty object

Iterate through `arrayOne`
- Set the object key of `arrayOneItems` to the current item referenced by
  `index`
 - If the key already exists, increment the value by 1
 - If the key does not exist, set the value to 1

Repeat the above steps for `arrayTwo` and `arrayTwoItems`

For each key in `arrayOneItems`
- Check the value for the same key in `arrayTwoItems`
- If any of the values do not match for the corresponding keys
  - Return false

Return `true` otherwise

*/

function getCharCounts(array) {
  let charCounts = {}

  for (let index = 0; index < array.length; index += 1) {
    let key = typeof(array[index]) === 'string' ? array[index] + 's' : array[index];
    if (charCounts[key]) {
      charCounts[key] += 1;
    } else {
      charCounts[key] = 1;
    }
  }

  return charCounts;
}

function areArraysEqual (arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) return false;

  let arrayOneItems = getCharCounts(arrayOne);
  let arrayTwoItems = getCharCounts(arrayTwo);

  for (let key in arrayOneItems) {
    if (arrayOneItems[key] !== arrayTwoItems[key]) {
      return false;
    }
  }

  return true;
}

console.log(areArraysEqual([1, 2, 3], [1, 2, 3]));                  // true
console.log(areArraysEqual([1, 2, 3], [3, 2, 1]));                  // true
console.log(areArraysEqual(['a', 'b', 'c'], ['b', 'c', 'a']));      // true
console.log(areArraysEqual(['1', 2, 3], [1, 2, 3]));                // false
console.log(areArraysEqual([1, 1, 2, 3], [3, 1, 2, 1]));            // true
console.log(areArraysEqual([1, 2, 3, 4], [1, 1, 2, 3]));            // false
console.log(areArraysEqual([1, 1, 2, 2], [4, 2, 3, 1]));            // false
console.log(areArraysEqual([1, 1, 2], [1, 2, 2]));                  // false
console.log(areArraysEqual([1, 1, 1], [1, 1]));                     // false
console.log(areArraysEqual([1, 1], [1, 1]));                        // true
console.log(areArraysEqual([1, '1'], ['1', 1]));                    // true