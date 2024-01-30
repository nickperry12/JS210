// Mutation

// What will the following code log to the console and why? Don't run the code
// until after you have tried to answer.

const array1 = ['Moe', 'Larry', 'Curly', 'Shemp', 'Harpo', 'Chico', 'Groucho', 'Zeppo'];
const array2 = array1;

// for (let i = 0; i < array1.length; i += 1) {
//   array2.push(array1[i]);
// }

for (let i = 0; i < array1.length; i += 1) {
  if (array1[i].startsWith('C')) {
    array1[i] = array1[i].toUpperCase();
  }
}

console.log(array2);

/*
Line 19 will log the array `['Moe', 'Larry', 'Curly', 'Shemp', 'Harpo', 'Chico',
'Groucho', 'Zeppo']`. On line 6, we declare and initialize the varibale `array1`
to the array `['Moe', 'Larry', 'Curly', 'Shemp', 'Harpo', 'Chico', 'Groucho',
'Zeppo']`. On line 7, we declare and initialize `array2` to an empty array.

On line 9, a `for` loop is used to push all the elements of `array1` into
`array2`. On line 13, another `for` loop is used, but this time to reassign any
String in `array1` that starts with `'C'` to the uppercased version of that
String. `array1` will now point to the following array: `['Moe', 'Larry',
'CURLY', 'Shemp', 'Harpo', 'CHICO', 'Groucho', 'Zeppo']`.

When we log `array2` to the console, we get a different output, even though we
pushed the elements of `array1` into `array2`. When we push in the values of
`array1` to `array2`, we're pushing in copies of that value. This demonstrates
the immutability of primitives. Strings are primitives, and when we reassign the
strings that start with `'C'` to their uppercased versions, we're not mutating
the object, but instead replacing it with an entirely new value.
*/

// Further Exploration

// What would happen if an object literal was part of the array1 elements pushed
// to array2? Would changes made to the object literal in array1 be reflected in
// array2? How would you change the code so that any changes made to array1 in
// the second for loop get reflected to array2?

/*
If an object literal was part of the `array1` elements being pushed in, the
changes to that object would be reflected in `array2` and vice versa. This is
because a reference to the object would be pushed into `array2`, not a copy of
the value; both `array1` and `array2` will contain a reference to the same
object.

To have it so that any changes to `array1` get reflected in `array2`, we can
instead initialize `array2` to `array1`. By doing so, `array2` will now contain
the same pointer to the object that `array1` contains, and any changes made to
`array1` will now be reflected in `array2`.

```
const array2 = array1;
```

*/