let a = [1, 2, 3];

function myValue(b) {
  b[2] += 7;
}

myValue(a);
console.log(a);


// What will the following code log to the console and why? Don't run the code
// until after you have tried to answer.


/*

On line 1, the variable `a` is declared with `let` and initialized to the array
`[1, 2, 3]`. On lines 3 - 5, the function `myValue` is defined with a single
parameter `b`. Within the function definiton, the bracket operator `[]` is used
to access the element at index `2` of the object referenced by `b`; the element
is reassigned to the sum of the current element plus `7`. `myValue` is invoked
on line 7, passing in the Array object referenced by `a` as an argument, and the
element at index `2` is reassigned, and as a result the array `[1, 2, 10]` is
logged on line 8. When `a` is passed in as an argument, JavaScript is passing in
a reference to the object; the global variable `a` and the local function
variable `b` are bothing containing pointers that point the same object, and any
changes made to `b` within the function will also be reflected by `a`.

*/