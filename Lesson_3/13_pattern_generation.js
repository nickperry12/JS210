// Pattern Generation

/*

Write a function that takes a number of rows as the argument nStars and logs a
square of numbers and asterisks. For example, if nStars is 7, log the following
pattern:


generatePattern(7);

// console output
1******
12*****
123****
1234***
12345**
123456*
1234567

P:

We want to create a function that takes an integer as an argument, `nStars`,
and logs a square of numbers and asterisks. If `nStars` is 7, the first line
should start with the integer 1, followed by 6 stars. The number of stars should
decrement by 1, with a star being replaced by the subsequent integer.

E:

See above for an example.

-- Modeling

Populate an array with stars
['*', '*', '*', '*', '*', '*', '*']

Set `currentNum` to `1`

Iterate through array
- Replace element at `index` with `currentNum`
- Join the elements of the array, and log the result
- Increment `currentNum` and `index` by 1
- Repeat until `index` is greater than the array length

A:

/-- Given a number `nStars` --/

Initialize `starsArray` to an empty collection
- Populate the array with `'*'` characters equivalent to `nStars`

Initialize `currentNum` to `1`

Iterate through the indices of `starsArray`
- Replace the element at `index` with `currentNum`
- Join the array into a string, and output to screen
- Increment `currentNum` and `index` by `1`
- Repeat until `index` is greater than the array length

*/

function populateArray(nStars) {
  let starsArray = [];
  let num = 0;

  while (num < nStars) {
    starsArray.push('*');
    num += 1;
  }

  return starsArray;
}

function generatePattern(nStars) {
  let starsArray = populateArray(nStars);
  let currentNum = 1;

  for (index = 0; index < starsArray.length; index += 1) {
    starsArray[index] = currentNum;
    console.log(starsArray.join(''));
    currentNum += 1;
  }
}

generatePattern(15);
