// Repeated Characters

/*

Implement a function that takes a String as an argument and returns an object
that contains a count of the repeated characters.

repeatedCharacters('Programming');    // { r: 2, g: 2, m: 2 }
repeatedCharacters('Combination');    // { o: 2, i: 2, n: 2 }
repeatedCharacters('Pet');            // {}
repeatedCharacters('Paper');          // { p: 2 }
repeatedCharacters('Baseless');       // { s: 3, e: 2 }

Note that repeatedCharacters does a bit more than simply count the frequency of
each character: it determines the counts, but only returns counts for characters
that have a count of 2 or more. It also ignores the case.

Given a string `string`

Downcase `string`
Split `string` into a collection of chars and assign to `chars`
- Filter out all the chars that have a count of less than 2
Initialize variable `charCount` to an empty object

Iterate over `chars`
- Set each char to a key in `charCount`
  - Set the initial value to 0
  - If the key already exists, increment the value by 1

Filter out the key-value pairs of `charCount` that have a value of 2 or more
- Return the filtered out key-value pairs

*/

function repeatedCharacters(string) {
  let chars = string.toLowerCase().split('');
  let charCount = {};

  chars.forEach(char => {
    if (charCount[char] === undefined) {
      charCount[char] = 1;
    } else {
      charCount[char] += 1;
    }
  });

  let filteredPairs = Object.entries(charCount).filter(([key, value]) => value >= 2);
  return Object.fromEntries(filteredPairs);
}

console.log(repeatedCharacters('Programming'));    // { r: 2, g: 2, m: 2 }
console.log(repeatedCharacters('Combination'));    // { o: 2, i: 2, n: 2 }
console.log(repeatedCharacters('Pet'));            // {}
console.log(repeatedCharacters('Paper'));          // { p: 2 }
console.log(repeatedCharacters('Baseless'));       // { s: 3, e: 2 }
