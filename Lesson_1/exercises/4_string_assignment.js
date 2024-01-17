/*

Take a look at the following code:

let myName = 'Bob';
const saveName = myName;
myName = 'Alice';
console.log(myName, saveName);

What does this code log to the console? Think about it for a moment before
continuing.

Answer:

The output will be:

'Alice'
'Bob'

If you said that this code logged:

Alice Bob

you would be 100% correct, and the answer should come as no surprise. Now let's
look at something slightly different

const myName = 'Bob';
const saveName = myName;
myName.toUpperCase();
console.log(myName, saveName);

What does this code log? Can you explain these results?


*/

const myName = 'Bob';
const saveName = myName;
myName.toUpperCase();
console.log(myName, saveName);

/*
Solution:

This will log:

Bob, Bob

Strings are a primitive type and immutable. When the `toUpperCase()` method is
called on `myName`, it's returning a new string, not mutating the String that
`myName` references.

*/