
console.log(a);

var a = 1;

// What will the following code log to the console and why? Don't run the code
// until after you have tried to answer.

/*

On line 4, the variable `a` is declared with `var` and initialized to the number
`1`. However, on line 2 we are logging the value of `a` to the console before
the declaration and initialization, and as a result, `undefined` will be logged
to the console. With hoisting this code snippet can be rearranged like so:

var a;

console.log(a);

a = 1;

In the creation phase, JavaScript will hoist all function and variable
declarations to the top of the program; it's important to note that this is
purely conceptual, and the code doesn't actually get rearranged. When a variable
is declared with `var`, it's given an initial value of `undefined`, which
explains why we get `undefined` logged on line 2.

*/