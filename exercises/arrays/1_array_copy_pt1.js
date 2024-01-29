let myArray = [1, 2, 3, 4];
const myOtherArray = myArray;

myArray.pop();
console.log(myArray);
console.log(myOtherArray);

myArray = [1, 2];
console.log(myArray);
console.log(myOtherArray);

// Read through the code shown below. What does it log to the console at lines 6
// and 10?

/*

On line 1 the variable `myArray` is declared with `let` and is initialized to
the array `[1, 2, 3, 4]`. On line 2, the variable `myOtherArray` is declared
with `const`, and is initialized to `myArray`. `myArray` and `myOtherArray` both
contain pointers that point to the same space in memory where the object is
located. 

On line 4, the `Array.prototype.pop()` method is invoked on `myArray`, mutating
the array and removing the last element. Because `myOtherArray` contains a
pointer to the same space in memory, it is referencing the same array as
`myArray`, and `[1, 2, 3]` is logged to the console on lines 5 and 6 when we log
the values referenced by `myArray` and `myOtherArray`.

On line 8, `myArray` is reassigned to the array `[1, 2]`. Reassignment is not
the same as mutation; `myArray` will now contain a pointer that points to a
different space in memory. `myArray` and `myOtherArray` are no longer
referencing the same array -- line 9 will log `[1, 2]` to the console, and line
10 will log `[1, 2, 3]`.

*/