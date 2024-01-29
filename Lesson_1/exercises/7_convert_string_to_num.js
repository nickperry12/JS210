// Convert a String to a Number

/*

For this exercise we're going to learn more about type conversion by
implementing our own parseInt function that converts a string of numeric
characters (including an optional plus or minus sign) to a number.

The function takes a string of digits as an argument, and returns the
appropriate number. Do not use any of the built-in functions for converting a
string to a number type.

For now, do not worry about leading + or - signs, nor should you worry about
invalid characters; assume all characters will be numeric.

A:

Set `num` to 0

Split the string into an collection of chars
- Reverse the order of the chars

Iterate over the collection of chars
- Get the value at key referenced by the current char
  - Multiply that value by (10**index)
    - Add the result to `num`

Return `num`
*/

const DIGITS = {
  '0' : 0,
  '1' : 1,
  '2' : 2,
  '3' : 3,
  '4' : 4,
  '5' : 5,
  '6' : 6,
  '7' : 7,
  '8' : 8,
  '9' : 9,
}

function stringToInteger(string) {
  let num = 0;
  let chars = string.split('').reverse();

  for (let index = 0; index < chars.length; index += 1) {
    let multiplier = 10 ** index
    let digit = DIGITS[chars[index]];
    num += digit * multiplier;
  }

  return num;
}

console.log(stringToInteger('422'));
console.log(stringToInteger('4321'));      // 4321
console.log(stringToInteger('570'));       // 570