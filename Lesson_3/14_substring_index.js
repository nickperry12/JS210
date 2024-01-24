// Index of Substring

/*

Write two functions that each take two strings as arguments. Their expected
behaviors are as follows:

The `indexOf` function searches for the first instance of a substring in
`firstString` that matches the string `secondString`, and returns the index of
the character where that substring begins.

The `lastIndexOf` function searches for the last instance of a substring in
`firstString` that matches the string `secondString`, and returns the index of
the character where that substring begins.

Both functions return `-1` if `firstString` does not contain the substring
specified by `secondString`.

Examples:

function indexOf(firstString, secondString) {
  // statements
}

function lastIndexOf(firstString, secondString) {
  // statements
}

indexOf('Some strings', 's');                      // 5
indexOf('Blue Whale', 'Whale');                    // 5
indexOf('Blue Whale', 'Blute');                    // -1
indexOf('Blue Whale', 'leB');                      // -1

lastIndexOf('Some strings', 's');                  // 11
lastIndexOf('Blue Whale, Killer Whale', 'Whale');  // 19
lastIndexOf('Blue Whale, Killer Whale', 'all');    // -1

P:

We want to create two functions: `indexOf` and `lastIndexOf`

The `indexOf` function should accecpt two arguments, `firstString` and
`secondString`. The function should search `firstString`, and return the first
index at which it finds the substring that matches `secondString`.

The `lastIndexOf` function should behave similarily, but should instead return

-- Modeling/Algo

`indexOf`, params: `stringOne`, `stringTwo`
I: 'Some strings', 's'
O: 5

Set `iterateLimit` to the length of `stringOne` minus the length of `stringTwo`

Iterate through the chars of `stringOne`, starting at index `0`
- Set `matchCount` to `0`
  - Iterate through the chars of `stringOne` again, starting at index `0`
    - Compares the char at the outer index + the inner index
      - If the char is the same, increment `matchCount` by 1
      - If `matchCount` is equal to the length of `stringTwo`, return the outer
        index

If iteration completes, and there is no match, return `-1`

*/

function indexOf (stringOne, stringTwo) {
  let iterateLimit = stringOne.length - stringTwo.length;

  for (let outerIdx = 0; outerIdx <= iterateLimit; outerIdx += 1) {
    matchCount = 0;

    for (let innerIdx = 0; innerIdx < stringTwo.length; innerIdx += 1) {
      if (stringOne[innerIdx + outerIdx] === stringTwo[innerIdx]) {
        matchCount += 1;
      } else {
        break;
      }

      if (matchCount === stringTwo.length) return outerIdx;
    }
  }

  return -1;
}

console.log(indexOf('Some strings', 's'));

/*

`lastIndexOf`
I: 'Blue Whale, Killer Whale', 'Whale'
O: 19

Set `iterateLimit` to the length of `stringOne` minus the length of `stringTwo`

Begin the outer loop, start at the last index of `stringOne`, decrement by 1 on
each iteration
- Set `matchCount` to `0`
  - Begin the inner loop, start at index `0`, increment by 1 on each iteration
    - Compare the char of `stringOne` at the index of `outerIdx` + `innerIdx`
      to the char of `stringTwo` at the index of `innerIdx`
      - If there is a match, increment `matchCount` by `1`, if not, break out
        of the loop
- If `matchCount` is equal to the length of `stringTwo`, return `outerIdx`

Return `-1` if no match

*/

function lastIndexOf(stringOne, stringTwo) {
  let iterateLimit = stringOne.length - stringTwo.length;

  for (let outerIdx = stringOne.length - 1; outerIdx > 0; outerIdx -= 1) {
    let matchCount = 0;

    for (let innerIdx = 0; innerIdx < stringTwo.length; innerIdx += 1) {
      if (stringOne[outerIdx + innerIdx] === stringTwo[innerIdx]) {
        matchCount += 1;
      } else {
        break;
      }
    }

    if (matchCount === stringTwo.length) return outerIdx;
  }

  return -1;
}

console.log(lastIndexOf('Blue Whale, Killer Whale', 'Whale'));  // 19
