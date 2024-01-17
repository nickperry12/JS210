var myVar = 'This is global';

function someFunction() {
  var myVar = 'This is local';
}

someFunction();
console.log(myVar);

/*

Local vs Global Part 1

What will the following code log to the console and why? Don't run the code
until after you have tried to answer.

Answer:

This code will log `'This is global'`. The global variable `myVar` is declared
and initialized to the String `'This is global'` on line in the main scope. The
`someFunction` function is declared on line 3, and within the function
definition, the function variable `myVar` is declared and initialized to the
string `'This is local'` on line 4. Because this variable is declared and
initialized within the function definiton, it is locally scoped to the function,
and will not be accessible from outside of the function. Thus, when `myVar` is
logged on line 8, we get `'This is global'`.


*/