// Substring (1)

/*

Write a function that returns a substring of a string based on a starting index
and length.

Modeling/Algo:

If the `length` argument is less than or equal to 0, return an empty string
If the `start` argument is a negative number
- add the number to the `string` length to find the starting index

Set `substring` to an empty string
Set `endIndex` to `start` plus `length`

Starting at the `start` index, iterate through the chars while `index` is less
than `endIndex`
- Append the char at `index` to `substring`
- Increment `index` by `1`

Return `substring`

*/

function substr(string, start, length) {
  if (length <= 0) return '';
  if (start < 0) {
    start += string.length;
  }

  let substring = ''
  let endIndex = start + length;

  for (let index = start; index < endIndex; index += 1) {
    if (string[index] === undefined) break;
    substring += string[index];
  }

  return substring;
}

let string = 'hello world';

console.log(substr(string, 2, 4));      // "llo "
console.log(substr(string, -3, 2));     // "rl"
console.log(substr(string, 8, 20));     // "rld"
console.log(substr(string, 0, -20));    // ""
console.log(substr(string, 0, 0));      // ""