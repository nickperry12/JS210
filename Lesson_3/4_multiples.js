/*

Write a function that logs the integers from 1 to 100 (inclusive) that are
multiples of either 3 or 5. If the number is divisible by both 3 and 5, append
an "!" to the number.

P:

We want to log the numbers from 1 to 100 (inclusive) that are multiples of
either 3 or 5. If it's a multiple of both, we should add `!` to the number.

Rules:

Number must be a multiple of 3 or 5
Append `!` to the number if it's a multiple of both.

E:

multiplesOfThreeAndFive();

// output on console
'3'
'5'
'6'
'9'
'10'
'12'
'15!'
// … remainder of output omitted for brevity

D:

Looping structure within the function

A:

Initialize `i` to 1

Begin a loop and continue while `i` is <= 100, and on each iteration:
- Check to see if `i` is a multiple of `3` or `5`
  - If it is a multiple of either, log the number
  - If it is a multiple of both, append `!` and log the number


*/

// function multiplesOfThreeAndFive() {
//   for(let currentNum = 1; currentNum <= 100; currentNum++) {
//     if (currentNum % 3 === 0 && currentNum % 5 === 0) {
//       console.log(String(currentNum) + '!');
//     } else if (currentNum % 3 === 0 || currentNum % 5 === 0) {
//       console.log(currentNum);
//     }
//   }
// }

// multiplesOfThreeAndFive();


// For additional practice, how would you change your function so it takes, as
// arguments, the range of numbers it should check?

function multiplesOfThreeAndFive(targetNum) {
  for(let currentNum = 1; currentNum <= targetNum; currentNum++) {
    if (currentNum % 3 === 0 && currentNum % 5 === 0) {
      console.log(String(currentNum) + '!');
    } else if (currentNum % 3 === 0 || currentNum % 5 === 0) {
      console.log(currentNum);
    }
  }
}

multiplesOfThreeAndFive(40);