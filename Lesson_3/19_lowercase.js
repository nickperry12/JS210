// Converting Strings to Lower Case

/*

Write a function that returns a string converted to lowercase.

To convert a single uppercase character to a lowercase character, get its ASCII
numeric representation from the ASCII table, add 32 to that number, then convert
the number back to a character using the same ASCII table. You can use the
String.fromCharCode and the String.charCodeAt methods for these operations.

For example:

let string = 'A';
let asciiNumeric = string.charCodeAt(0);         // 65
asciiNumeric += 32;
string = String.fromCharCode(asciiNumeric);  // "a", converted to lowercase

Examples

function toLowerCase(string) {
  // …
}

toLowerCase('ALPHABET');    // "alphabet"
toLowerCase('123');         // "123"
toLowerCase('abcDEF');      // "abcdef"

P:

We want to create a function that takes a string as an argument, and replaces
all upper case alphabetical characters with lowercase characters, and returns
the string. Any non-alphabetical characters should be left as is.

E:

See above.

Modeling/Algorithm:

Character code range for uppercase alphabeticals: 65 - 90
Character code range for lowercase alphabeticals: 97 - 122

To get the lowercase character, we can find the character at the ASCII value 32
numbers ahead.

Set `upperRangeStart` to `65`
Set `upperRangeEnd` to `90`
Set `newString` to an empty string

Iterate through the chars of the given string
- Find the ASCII character code value of that character
  - If the value is greater than or equal to `upperRangeStart` and less than or
    equal to `upperRangeEnd`
    - Take the character code value, add 32, and concatenate the character at
      that value to `newString`
  - If the character is not within range, concatenate it to `newString` as is

Return `newString`


*/

const upperRangeStart = 65;
const upperRangeEnd = 90;

function toLowerCase(string) {
  let newString = ''

  for (index = 0; index < string.length; index += 1) {
    let asciiCode = string[index].charCodeAt();
    
    if (asciiCode >= upperRangeStart && asciiCode <= upperRangeEnd) {
      let newAsciiCode = asciiCode + 32;
      let char = String.fromCharCode(newAsciiCode);
      newString += char;
    } else {
      newString += string[index];
    }
  }

  return newString;
}


console.log(toLowerCase('ALPHABET'));    // should return "alphabet"
console.log(toLowerCase('123'));         // should return "123"
console.log(toLowerCase('abcDEF'));      // should return "abcdef"