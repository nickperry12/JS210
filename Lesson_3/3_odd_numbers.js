/* 

Write a function that takes a positive integer as an argument, and logs all the
odd numbers from 1 to the passed in number (inclusive). All numbers should be
logged on separate lines.

P:

We want to create a function that takes a positive integer as the argument,
and logs all the values from 1 to the argument number (inclusive). Numbers
need to be logged on separate lines.

E:

logOddNumbers(19);

// output on console
1
3
5
7
9
11
13
15
17
19

D:

Can use an array to store all numbers

A:

Begin a loop, and loop until `i` is greater than 19
- Initialze an array to `oddNums`
- If `i` is not evenly divisible by 2, push it into `oddNums`

Once loop iteration is complete
- Iterate through `oddNums` and output each number

For more practice, consider the following:

You can remove the conditional inside the loop and increment `i` by 2
with each step, instead of 1. How would you write code to do that? 

Instead of a conditional that checks for odd numbers, you can write a
conditional that checks for even numbers, but skips them with the continue
statement. How would you write your code?

*/

// Further Exploration 1

// function logOddNumbers(targetNum) {
//   let oddNums = [];

//   for(let i = 1; i <= targetNum; i += 2) {
//     oddNums.push(i);
//   }

//   oddNums.forEach(value => console.log(value));
// }

// logOddNumbers(19);

// Further Exploration 2

function logOddNumbers(targetNum) {
  let oddNums = [];

  for(let i = 1; i <= targetNum; i += 1) {
    if (i % 2 === 0) {
      continue
    } else {
      oddNums.push(i);
    }
  }

  oddNums.forEach(value => console.log(value));
}

logOddNumbers(19);
