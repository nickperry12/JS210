// Convert a Number to a String

/*

In the previous two exercises, you developed functions that convert simple
numeric strings to signed integers. In this exercise and the next, you're going
to reverse those functions.

You will learn more about converting strings to numbers by writing a function
that takes a positive integer or zero, and converts it to a string
representation.

You may not use any of the standard conversion functions available in
JavaScript, such as String(), Number.prototype.toString, or an expression such
as '' + number. Your function should do this the old-fashioned way and construct
the string by analyzing and manipulating the number.

A:

I: 4321
O: "4321"

Set `DIGITS` to an array containing the string digits of `0` to `9`

Set `result` to an empty string

Set `remainder` to the result of the given number (4321) remainder 10
=> 1

Reassign `number` to the result of `number` divided by `10`
- Find the floor of the result
=> 432

Using `remainder` as the index, concatenate the element referenced by
`remainder` from the `DIGITS` array to `result`
=> 

Repeat these steps unil `number` is 0

Return `result`

*/

const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function integerToString(number) {
  let result = '';

  do {
    let remainder = number % 10;
    number = Math.floor(number / 10);

    result = DIGITS[remainder] + result;
  } while (number > 0);

  return result;
}


console.log(integerToString(4321));      // "4321"
console.log(integerToString(0));         // "0"
console.log(integerToString(5000));      // "5000"