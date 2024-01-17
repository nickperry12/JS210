/*

Write a function that takes a number argument, and returns true if the number is
prime, or false if it is not.

You may assume that the input is always a non-negative integer.

P:

Need to create a function that accepts a number for an argument, and returns
true if the number is prime, false if not.

-- Modeling:

How do we check if a number is prime?
- The number should be divisible by itself or 1. 

We can iterate through numbers 1 to the target number
- check if its evenly divisible by the current number
  - if its evenly divisible, and the number is neither 1 or the target
    - break out of the loop and return false

E:

isPrime(1);   // false
isPrime(2);   // true
isPrime(3);   // true
isPrime(43);  // true
isPrime(55);  // false
isPrime(0);   // false

A:

/-- Given a number `number` --/

If the given number is less than or equal to `1`
- log `false` and cease execution

Initialize `divisor` to `2`

While `divisor` is less than `number`
- Check to see if `number` is evenly divisble by `number`
  - If it is, log `false` and cease execution
- Increment `divisor` by `1`

Log `true`

*/

function isPrime(number) {
  if (number <= 1) {
    console.log(false);
    return;
  }

  for (let divisor = 2; divisor < number; divisor += 1) {
    if (number % divisor === 0) {
      console.log(false);
      return;
    }
  }

  console.log(true);
}

isPrime(1);   // false
isPrime(2);   // true
isPrime(3);   // true
isPrime(43);  // true
isPrime(55);  // false
isPrime(0);   // false