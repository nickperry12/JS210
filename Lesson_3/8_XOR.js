/*

For boolean values, the || operator returns true if either or both of its
operands are true, false if both operands are false. The && operator, on the
other hand, returns true if both of its operands are true, and false if either
operand is false. This works great until you need only one of two conditions to
be true, the so-called "exclusive or", or XOR.

Write a function named isXor that takes two arguments, and returns true if
exactly one argument is truthy, false otherwise. Your function should work with
the boolean values of true and false, but also any JavaScript values based on
their "truthiness".

P:

Create a function called `isXor` that takes two arguments of any data type, and
returns `true` if exactly one argument is truthy, `false` otherwise.

-- Modeling:

We want the function to return `true` if exactly one argument returns `true`.

Must first check if both arguments are `true`
- arg1 && arg2

Multiple conditionals
- arg1 is true || arg2 is true
  - return true

A:

/-- Given two arguments of any type --/

Check to see if both arguments are truthy
- If they are, return `false`

Check to see if either of the arguments are truthy
- If one of them is, return `true`
- If neither are, return `false`

*/

function isXor(argOne, argTwo) {
  if (argOne && argTwo ) {
    return false;
  } else if (argOne || argTwo ) {
    return true;
  }

  return false;
}

console.log(isXor(false, true));     // true
console.log(isXor(true, false));     // true
console.log(isXor(false, false));    // false
console.log(isXor(true, true));      // false


console.log(isXor(false, 3));        // true
console.log(isXor('a', undefined));  // true
console.log(isXor(null, ''));        // false
console.log(isXor('2', 23));         // false