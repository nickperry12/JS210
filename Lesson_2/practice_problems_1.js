/* 

1. We need a function that takes 3 arguments, all numbers, and finds the
   average.

*/

// function average(numOne, numTwo, numThree) {
//   let totalArguments = 3;
//   let sum = numOne + numTwo + numThree;
//   return (sum / totalArguments).toFixed(2);
// }

// console.log(average(5, 2, 10));

/*

2. Need to declare a function that finds the sum of the three arguments passed
   into it. Then, use the `sum` function within the `average` function.

*/

// function sum(numOne, numTwo, numThree) {
//   return numOne + numTwo + numThree;
// }

// function average(numOne, numTwo, numThree) {
//   let total = sum(numOne, numTwo, numThree);
//   let totalArguments = 3;
//   return total / totalArguments;
// }

// console.log(average(5, 5, 5));

/*

3. Declare a function that iterates through an array of numbers, and increments
   a variable `total` by each value in the array. After iteration is complete,
   find the average by dividing `total` by the length of the array.

*/

// function average(array) {
//   let total = 0;

//   for (index = 0; index <= (array.length - 1); index += 1) {
//     total += array[index];
//   }

//   return (total / array.length).toFixed(2);
// }

// console.log(average([10, 5, 5]));

/*

4. We should make the same changes to the `sum` function so we can continue to
   use it from the `average` function. Since we've already written that
   functionality in `average`, we can just move it from there to `sum`. Move
   everything from `average` into `sum`, except for the
   final `return` statement. The `sum` function should return the total,
   and `average` should call the `sum` function with the same values, then
   divide the return value by the array length, and return it.

*/

function sumArray(array) {
  let sum = 0;

  for (index = 0; index <= (array.length - 1); index += 1) {
    sum += array[index];
  }

  return sum;
}

function average(array) {
  let totalArgs = array.length;
  let sum = sumArray(array);

  return (sum / totalArgs).toFixed(2);
}

let arrOfNums = [10, 2, 7, 1, 21];

console.log(average(arrOfNums));