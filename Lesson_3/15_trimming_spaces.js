// Trimming Spaces

/*

Write a function that takes a string as an argument, and returns the string
stripped of spaces from both ends. Do not remove or alter internal spaces.

Example:

trim('  abc  ');  // "abc"
trim('abc   ');   // "abc"
trim(' ab c');    // "ab c"
trim(' a b  c');  // "a b  c"
trim('      ');   // ""
trim('');         // ""

You may use the square brackets ([]) to access a character by index (as shown
below), and the length property to find the string length. However, you may not
use any other properties or methods from JavaScript's built-in String class.

'hello'[0];       // "h"
'hello'[4];       // "o"

---------------------------------------------------

P:

We want to create a function that removes the white space at the beginning and
end of each string. We can use square bracket notation to replace string
characters, and we can use the length property to find the string, but we cannot
use any other built-in String class methods. 

-- Modeling:

I: '  abc  '
O: 'abc'

Set `charCollection` to an empty array
Iterate through chars of given string
- push each char into `charCollection`

Set `firstIndex` to `0`
Set `lastIndex` to the length `charCollection` minus one

Until the elements at `firstIndex` and `lastIndex` of `charCollection` are not
spaces
- Remove the elements at the first and last index
- Reassign `lastIndex` to the new length of `charCollection` minus one
*/

function collectChars(string) {
  let charCollection = [];

  for (index = 0; index < string.length; index += 1) {
    charCollection.push(string[index]);
  }

  return charCollection;
}

function trim(string) {
  let chars = collectChars(string);
  let firstIndex = 0;
  let lastIndex = chars.length - 1;

  while (chars[firstIndex] === ' ') {
    chars.shift();
  }

  while (chars[lastIndex] === ' ') {
    chars.pop();
  }

  console.log(chars)
  return chars.join('');
}


console.log(trim('  abc  '));
console.log(trim('  abc  '));  // "abc"
console.log(trim('abc   '));   // "abc"
console.log(trim(' ab c'));    // "ab c"
console.log(trim(' a b  c'));  // "a b  c"
console.log(trim('      '));   // ""
console.log(trim(''));         // ""