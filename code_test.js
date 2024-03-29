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

Copy Code
stringToSignedInteger('4321');      // 4321
stringToSignedInteger('-570');      // -570
stringToSignedInteger('+100');      // 100

*/

// function stringToSignedInteger(string) {
//   return Number(string);
// }

function stringToSignedInteger(string) {
  if (string[0] === '+') {
    string = string.slice(1);
  }
}

console.log(stringToSignedInteger('4321'));      // 4321
console.log(stringToSignedInteger('-570'));      // -570
console.log(stringToSignedInteger('+100'));      // 100