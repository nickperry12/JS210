/*

Write a function logMultiples that takes one argument number. It should log all
multiples of the argument between 0 and 100 (inclusive) that are also odd
numbers. Log the values in descending order.

You may assume that number is an integer between 0 and 100.

P:

Need to create a function that accepts a single number for an argument. This
function should log all the numbers between 0 and 100 (inclusive) that are
multiples of the number passed in that are also odd numbers. The numbers should
be logged in descending order.

E:

logMultiples(17);
// output (5x, 3x and 1x)
85
51
17

logMultiples(21);
// output (3x and 1x)
63
21

D:

Looping structure

A:

/-- Given a number `multiple` --/

Initialize `currentNum` to 100

Begin a loop, and while `currentNum` is greater than or equal to 0:
- Check to see if `currentNum` is evenly divisible by `multiple` and is odd
  - Log the number if it meets both requirements
- Decrement `currentNum` by 1
*/

// function logMultiples(multiple) {
//   for (let currentNum = 100; currentNum >= 0; currentNum -= 1) {
//     if (currentNum % multiple === 0 && currentNum % 2 === 1) {
//       console.log(currentNum);
//     }
//   }
// }

// logMultiples(21);
// logMultiples(17);

/*

Further Exploration

This solution must step through every number between 100 and 0. Alternatively,
you can determine the number's largest multiple that is less than 100, then
start the loop with that multiple. With each iteration of the loop, you can
decrement the number by the argument; when the result is negative, you can quit.

As above, we must check each multiple to determine whether it is odd. If it is
odd, we log it.

Math.floor(100 / number) * number returns the largest multiple of number that is
between 0 and 100. If you're not familiar with the floor method, see the
documentation.

*/

function logMultiples(multiple) {
  let maxMultiple = Math.floor(100 / multiple) * multiple;

  for (let number = maxMultiple; number >= 0; number -= multiple) {
    if (number % 2 === 1) {
      console.log(number);
    }
  }
}

logMultiples(31);