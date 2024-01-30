// Array Object Part 1

// What will the following code log to the console and why? Don't run the code
// until after you have tried to answer.

const myArray = ['a', 'b', 'c'];

console.log(myArray[0]); // 'a'
console.log(myArray[-1]); // undefined

myArray[-1] = 'd';
myArray['e'] = 5;
myArray[3] = 'f';

console.log(myArray[-1]); // 'd'
console.log(myArray['e']); // 5
console.log(myArray); // ['a', 'b', 'c', 'f', '-1' : 'd', e: 5]

myArray.forEach(item => console.log(item));

/*
On line 6, `myArray` is declared and initialized to the array `['a', 'b', 'c']`.
On line 8, bracket notation is used to access the element at index `0`, which
logs `'a'` to the console. On line 9, bracket notation is used to access the key
`-1`, but because this key has yet to be created or assigned a value,
`undefined` is logged to the console.

On line 11, bracket notation is used to assign the key `-1` a value of `'d'`.
Bracket notation is then used on line 12 to create a key value pair, where the
key is `'e'` and the value is `5`. Bracket notation is used once again on line
13 to create a key value pair, with `3` as the key and `'f'` as the value.

When we attempt to access the key `-1` again on line 15, `'d'` is logged to the
console. Line 16 will log `5` when we access the key `'e'` using bracket
notation. When we log the `myArray` on line 17, the array `['a', 'b', 'c', 'f',
'-1' : 'd', e: 5]` is logged to the console.

This code snippet demonstrates that arrays are actually Objects. When we log
`myArray` to the console on line 17, it's going to the log all of the elements
(a value that is assigned to a property that is a non-negative integer is an
element), as well as any key-value pairs within the array. Even though the key
value pairs `-1 : 'd'` and `e : 5` aren't elements, they are still properties of
the Array, and as such will appear when `myArray` is logged to the console.
*/