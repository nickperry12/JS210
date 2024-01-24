// Repeating Strings

/*

Implement a function that takes a string and a number times as arguments. The
function should return the string repeated times number of times. If times is
not a number, return undefined. If it is a negative number, return undefined
also. If times is 0, return an empty string. You may ignore the possibility that
times is a number that isn't an integer.

P:

We want to create a function that takes two arguments -- a string, and a number
that reprensents the amount of times we want to repeat that string. If the
second argument provided isn't a POSITIVE number, the function should return
undefined. If the number provided is 0, the function should return an empty
string.

E:

repeat('abc', 1);       // "abc"
repeat('abc', 2);       // "abcabc"
repeat('abc', -1);      // undefined
repeat('abc', 0);       // ""
repeat('abc', 'a');     // undefined
repeat('abc', false);   // undefined
repeat('abc', null);    // undefined
repeat('abc', '  ');    // undefined

Modeling/Algo:

Params: `string`, `repeater`

If `repeater` isn't a number or is less than 0, return undefined
If `repeater` is `0`, return an empty string

While `repeater` is greater than or equal to `1`
- Concatenate the string to itself
- Decrement `repeater` by 1

Return `string`

*/

function repeat(string, repeater) {
  let stringToConcat = string;

  if (typeof(repeater) !== 'number' || repeater < 0) {
    return undefined;
  } else if (repeater === 0) {
    return '';
  }

  while (repeater > 1) {
    string += stringToConcat;
    repeater -= 1;
  }

  return string;
}

console.log(repeat('abc', 1));       // "abc"
console.log(repeat('abc', 2));       // "abcabc"
console.log(repeat('abc', -1));      // undefined
console.log(repeat('abc', 0));       // ""
console.log(repeat('abc', 'a'));     // undefined
console.log(repeat('abc', false));   // undefined
console.log(repeat('abc', null));    // undefined
console.log(repeat('abc', '  '));    // undefined