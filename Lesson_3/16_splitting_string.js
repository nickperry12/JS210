// Splitting a String

/*

Write a function that takes two arguments:

a string to be split
a delimiter character
The function logs the split strings to the console, as shown below:

Examples

function splitString(string, delimiter) {
  // …
}

splitString('abc,123,hello world', ',');
// logs:
// abc
// 123
// hello world

splitString('hello');
// logs:
// ERROR: No delimiter

splitString('hello', '');
// logs:
// h
// e
// l
// l
// o

splitString('hello', ';');
// logs:
// hello

splitString(';hello;', ';');
// logs:
//  (this is a blank line)
// hello

P:

We want to create a function that takes two arguments, a string and a delimiter.
The function should split the string at the given delimiter, and logs the split
strings. If no delimiter is given, an error message should be logged instead.

-- Modeling/Algo

splitString('abc,123,hello world', ',');
// logs:
// abc
// 123
// hello world

If no delimiter is provided
- Log an error message

If the delimiter is an empty string
- Log each char of the string

Set `outputString` to an empty string

Iterate through the given string
- If the current char doesn't match the delimiter
  - Concatentate `outputString` with the current char
- If the current char does match the delimiter
  - Log the `outputString`
  - Set `outputString` to an empty string

*/

function splitString(string, delimiter) {
  if (delimiter === undefined) {
    console.log('ERROR: No delimiter provided');
  } else if (delimiter === '') {
    for (let index = 0; index < string.length; index += 1) {
      console.log(string[index]);
    }
    return;
  }

  let outputString = '';

  for (let index = 0; index < string.length; index += 1) {
    if (string[index] !== delimiter) {
      outputString += string[index];
    } else {
      console.log(outputString);
      outputString = '';
    }
  }

  console.log(outputString);
}

splitString('abc,123,hello world', ',');
// logs:
// abc
// 123
// hello world

splitString('hello');
// logs:
// ERROR: No delimiter

splitString('hello', '');
// logs:
// h
// e
// l
// l
// o

splitString('hello', ';');
// logs:
// hello

splitString(';hello;', ';');
// logs:
//  (this is a blank line)
// hello