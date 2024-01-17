let a = 7;

function myValue(a) {
  a += 10;
}

myValue(a);
console.log(a);

/* 

Arguments Part 2

What will the following code log to the console and why? Don't run the code
until after you have tried to answer.

Answer:

Line 8 will log `7`. Variable `a` is declared and initialized on line 1 to the
number `7`. The `myValue()` function is declared and defines on lines 3 - 5,
defining a single function parameter `a`. The function paramter `a` is locally
scoped to the function, causing it to shadow the outer variable `a`. 

Numbers are primitive values and cannot be mutated. When the outer scoped `a` is
passed in as an argument to `myValue()` on its invocation line 7, the inner
scoped `a` will then point to the same value as the outer scoped `a`, but both
the values will be stored in different spaces in memory. When the inner scoped
`a` is re-assigned to the return value of the current value of `a` plus 10, the
outer scoped `a` is unaffected, and thus, `7` is logged on line 8.

This demonstrates the concepts of numbers being primitive values and as such are
immutable, as well as the concept of variable shadowing.

*/