// Array Objects Part 2

// A user wrote a function that takes an array as an argument and returns its
// average. Given the code below, the user expects the average function to
// return 5. Is the user's expectation correct? Why or why not?

// const myArray = [5, 5];
// myArray[-1] = 5;
// myArray[-2] = 5;

// function average(array) {
//   let sum = 0;

//   for (let i = -2; i < array.length; i += 1) {
//     sum += array[i];
//   }

//   return sum / array.length;
// }

// console.log(average(myArray));

/*
Assuming that the user expected the length of `myArray` to be `4`, which is what
it would need to be get get an average of `5`, then their expectation is wrong.
The `length` property of an array will always be `1` higher than the highest
index, in this case the highest index is `1`, and the length is `2`. 

On line 7, `myArray` is declared and initialized to the array `[5, 5]`. Bracket
notation is then used on lines 8 and 9 to create key value pairs, `-1 : 5` and
`-2 : 5`, respectively. However, because the propery names of these key value
pairs are not non-negative integers, the values are not considered elements, and
as such are not counted when the `length` property is calculated -- the `length`
property only takes into consideration the amount of elements in the array, and
thus, the `length` is `2`.

On lines 11 to 19, the `average` function is declared and defined. Within the
function, the variable `sum` is declared and initialized to `0`. A `for` loop is
used to iterate through the properties of the array passed in, using the local
block variable `i` to reference the property, and incement `sum` by its value.

When `average` is invoked on line 21 with `myArray` being passed in as an
argument, `sum` will have a final value of `20; each property in the array has a
value of `5`, and when divided by the `length` of the `myArray` (the `length` is
`2`), the returned value will be `10`.
*/

// Further Exploration
// Refactor the code to get the expected return value of `5`.

const myArray = [5, 5];
myArray[-1] = 5;
myArray[-2] = 5;

function average(array) {
  let sum = 0;

  for (let i = 0; i < array.length; i += 1) {
    sum += array[i];
  }

  return sum / array.length;
}

console.log(average(myArray));