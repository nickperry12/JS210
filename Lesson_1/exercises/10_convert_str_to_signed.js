// Convert String to Signed Number

/*

The previous exercise mimics the parseInt function to a lesser extent. In this
exercise, you're going to extend that function to work with signed numbers.

Write a function that takes a string of digits and returns the appropriate
number as an integer. The string may have a leading + or - sign; if the first
character is a +, your function should return a positive number; if it is a -,
your function should return a negative number. If there is no sign, return a
positive number.

You may assume the string will always contain a valid number.

Examples:

stringToSignedInteger('4321');      // 4321
stringToSignedInteger('-570');      // -570
stringToSignedInteger('+100');      // 100

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

function stringToSignedInteger(string) {
  let result;

  if (string[0] === '+') {
    string = string.slice(1);
    result = stringToInteger(string);
  } else if (string[0] === '-') {
    string = string.slice(1);
    result = 0 - stringToInteger(string);
  } else {
    result = stringToInteger(string);
  }

  return result;
}

console.log(stringToSignedInteger('4321'));      // 4321
console.log(stringToSignedInteger('-570'));      // -570
console.log(stringToSignedInteger('+100'));      // 100