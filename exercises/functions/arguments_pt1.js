let a = 7;

function myValue(b) {
  b += 10;
}

myValue(a);
console.log(a);

/* 

Arguments Part 1


What will the following code log to the console and why? Don't run the code
until after you have tried to answer.

Answer:

Line 8 will log `7`. The variable `a` is declared and initialized to the number
`7` in the outer scope, creating a global variable. The function `myValue` is
declared and defined on lines 3-5, defining a single funciton parameter `b`.
Within the function, the function parameter `b` is reassigned to the return
value of the value of `b` plus 10. 

When `myValue` is invoked on line 7, the global variable `a` is being passed in
as an argument. At this point the function parameter `b` and global variable `a`
will both point to the same value, but, these values will be be located in
different spaces in memory. When `b` is reassigned on line 4, the outer scoped 
`a` is unaffected, and therefore, its initial value of `7` is logged on line 8.

This demonstrates that numbers are primitive values, and are immutable.

*/