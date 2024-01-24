// String Starts With

/*

Implement a function that determines whether a string begins with another
string. If it does, the function should return true, or false otherwise.

You may use the square brackets ([]) to access a character by index (as shown
below), and the length property to find the string length. However, you may not
use any other properties or methods from JavaScript's built-in String class.


P:

We want to create a function that takes two arguments, a string, and a search
string. The function should return `true` if `string` starts with `searchString`
and `false` if not. We can only use square brackets to access a character by its
index or use the length method. Other than that, we may not use any built in
String methods.

E:

let str = 'We put comprehension and mastery above all else';
startsWith(str, 'We');              // true
startsWith(str, 'We put');          // true
startsWith(str, '');                // true
startsWith(str, 'put');             // false

let longerString = 'We put comprehension and mastery above all else!';
startsWith(str, longerString);      // false

Modeling/Algo:

If the length of `searchString` exceeds the length of `string`
- return `false`

Set the `lastIndex` to the length of `searchString`
Set `index` to `0`

Iterate through the chars of `string` up to `lastIndex`
- Compare the chars of `string` and `searchString` at `index`
  - If the characters match, continue iteration
  - If the characters do not match, return false

If iteration completes, return true

*/

function startsWith(string, searchString) {
  if (searchString.length > string.length) {
    return false;
  }

  let lastIndex = searchString.length;

  for (let index = 0; index < lastIndex; index += 1) {
    if (string[index] !== searchString[index]) {
      return false;
    }
  }

  return true;
}

let str = 'We put comprehension and mastery above all else';
console.log(startsWith(str, 'We'));              // true
console.log(startsWith(str, 'We put'));          // true
console.log(startsWith(str, ''));                // true
console.log(startsWith(str, 'put'));             // false

let longerString = 'We put comprehension and mastery above all else!';
console.log(startsWith(str, longerString));      // false
