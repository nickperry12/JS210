// Substrings (2)

/*

This practice problem is similar to the previous one. This time though, both
arguments are indices of the provided string. The following rules apply:

If both start and end are positive integers, start is less than end, and both
are within the boundary of the string, return the substring from the start index
(inclusive), to the end index (NOT inclusive).

If the value of start is greater than end, swap the values of the two, then
return the substring as described above.

If start is equal to end, return an empty string.

If end is omitted, the end variable inside the function isundefined. Return the
substring starting at position start up through (and including) the end of the
string.

If either start or end is less than 0 or NaN, treat it as 0.

If either start or end is greater than the length of the string, treat it as
equal to the string length.

P:

We want to create a function that takes a string as an argument, and returns a
substring created from the given string. The resulting string will be created
based off a set of conditions:

If the `start` and `end` arguments are positive integers, `start` is less than
`end`, and both are less than or equal to the length of `string`, return a
substring that contains all the characters from the `start` index up to the
`end` index (non-inclusive).

If the `start` is greater than `end`, swap the values of the two, then return the
substring as described above.

If `start` is equal to `end`, return an empty string.

If no value is provided for `end`, return a substring that starts at the index
`start` up to and including the last character of `string`.

If either `start` or `end` is less than `0` or NaN, treat it as `0`.

If either `start` or `end` is greater than the length of the string, treat it as
equal to the string length.

*/

function substring(string, start, end) {
  if (end === undefined) {
    end = string.length;
  }

  if (start < 0 || isNaN(start)) {
    start = 0;
  }

  if (end < 0 || isNaN(end)) {
    end = 0;
  }

  if (start > end) {
    [start, end] = [end, start];
  }

  if (start > string.length) {
    start = string.length;
  }

  if (end > string.length) {
    end = string.length;
  }

  let newString = '';
  for (let index = start; index < end; index += 1) {
    newString += string[index];
  }

  return newString;
}


let string = 'hello world';

console.log(substring(string, 2, 4));    // "ll"
console.log(substring(string, 4, 2));    // "ll"
console.log(substring(string, 0, -1));   // ""
console.log(substring(string, 2));       // "llo world"
console.log(substring(string, 'a'));     // "hello world"
console.log(substring(string, 8, 20));   // "rld"