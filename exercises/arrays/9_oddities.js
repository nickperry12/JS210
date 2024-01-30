// Oddities

/*

The oddities function takes an array as an argument and returns a new array
containing every other element from the input array. The values in the returned
array are the first (index 0), third, fifth, and so on, elements of the input
array. The program below uses the array returned by oddities as part of a
comparison. Can you explain the results of these comparisons?

*/

function oddities(array) {
  const oddElements = [];

  for (let i = 0; i < array.length; i += 2) {
    oddElements.push(array[i]);
  }

  return oddElements;
}

// oddities([2, 3, 4, 5, 6]) === [2, 4, 6];      // false
// oddities(['abc', 'def']) === ['abc'];         // false

/*

The above comparisons will always return `false`. When objects are compared in
JavaScript, they are compared by their reference, not the values. Even if an
array appears to contain the same elements in the same order as the array it's
being compared with, it will return `false` because they're different objects -
they don't occupy the same space in memory. In this case, we're not only
comparing two different arrays that occupy two different spaces in memory, they
also do contain the same elements nor the same number of elements.

*/