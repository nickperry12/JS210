// Rot13 Cipher

/*

Rot13 ("rotate by 13 places") is a letter-substitution cipher that translates a
String into a new String:

For each character in the original String:

If the character is a letter in the modern English alphabet, change it to the
character 13 positions later in the alphabet. Thus, a becomes n. If you reach
the end of the alphabet, return to the beginning. Thus, o becomes b.

Letter transformations preserve case. A becomes N while a becomes n.
Don't modify characters that are not letters.

Write a Function, rot13, that takes a String and returns that String transformed
by the rot13 cipher.

Modeling/Algo:

Set constant `upperAlphaRangeEnd` to `90`
Set constant `lowerAlphaRangeEnd` to `122`

Iterate through characters of the given string, and if the character is an
alphabetical character, transform the characters:

For transforming uppercase letters:
- Find the ASCII code value of the character
  - Add 13 to the value
    - If the value exceeds `upperAlphaRangeEnd`, substract 13 instead
  - Find the char at the new ASCII code value, and replace the char with the
    char at that value

For transforming lowercase letters:
- Find the ASCII code value of the character
  - Add 13 to the value
    - If the value exceeds `upperAlphaRangeEnd`, substract 13 instead
  - Find the char at the new ASCII code value, and replace the char at that
    value

To check if a character is an alphabetical:
- If the character is greater than or equal to 'A' and less than or equal to 'Z'
  - return true
- If the character is greater than or equal to 'a' and less than or equal to 'z'
  - return true
- Otherwise, return false

*/

const UPPER_ALPHA_RANGE_END = 90;
const LOWER_ALPHA_RANGE_END = 122;

function rotateUpperCase(character) {
  let asciiCode = character.charCodeAt();

  if (asciiCode + 13 > UPPER_ALPHA_RANGE_END) {
    asciiCode -= 13;
  } else {
    asciiCode += 13;
  }

  return String.fromCharCode(asciiCode);
}

function rotateLowerCase(character) {
  let asciiCode = character.charCodeAt();

  if (asciiCode + 13 > LOWER_ALPHA_RANGE_END) {
    asciiCode -= 13;
  } else {
    asciiCode += 13;
  }

  return String.fromCharCode(asciiCode);
}

function rot13(string) {
  let encodedString = ''

  for (let index = 0; index < string.length; index += 1) {
    if (string[index] >= 'A' && string[index] <= 'Z') {
      let rotatedChar = rotateUpperCase(string[index]);
      encodedString += rotatedChar;
    } else if (string[index] >= 'a' && string[index] <= 'z') {
      let rotatedChar = rotateLowerCase(string[index]);
      encodedString += rotatedChar;
    } else {
      encodedString += string[index];
    }
  }

  return encodedString;
}

console.log(rot13('Teachers open the door, but you must enter by yourself.'));

// logs:
// Grnpuref bcra gur qbbe, ohg lbh zhfg ragre ol lbhefrys.

console.log(rot13(rot13('Teachers open the door, but you must enter by yourself.')));

// logs:
// Teachers open the door, but you must enter by yourself.