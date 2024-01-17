var myVar = 'This is global';

function someFunction() {
  myVar = 'This is local';
}

someFunction();
console.log(myVar);

/* 

Local vs Global Part 3

What will the following code log to the console and why? Don't run the code
until after you have tried to answer.

Answer:

Line 8 will log `'This is local'`. The `myVar` variable is declared and
initialized on line 1 to the string `'This is global'`. The `someFunction`
function is declared and defined on line 3 - 5. On line 4 within the function
defintion, the `myVar` variable is re-assigned to the string `'This is local'`.
Because `myVar` was declared in the outer scope, it is scoped globally and is
accessible from within `someFunction`, and when `someFunction()` is invoked on
line 7, `myVar` gets re-assigned, and we get `'This is local'` logged on line 8.

*/