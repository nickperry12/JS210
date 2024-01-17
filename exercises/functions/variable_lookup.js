var myVar = 'This is global';

function someFunction() {
  console.log(myVar);
}

someFunction();

/*

Variable Lookup

What will the following code log to the console and why? Don't run the code
until after you have tried to answer.

Answer:

Line 7 will log `'This is global'`. `myVar` is declared and initialized to the
string `'This is global'` on line 1. Because it's declared in the main scope,
it's a global variable and is available anywhere in the program. Within the
`someFunction` function definiton, `console.log` is invoked with `myVar` being
passed in as an argument. JavaScript searches for variables lexically; it will
first look within the function for `myVar`, and then will search the main scope
when it's not found there. `myVar` is found within the main scope and thus,
`'This is global'` is logged when `someFunction()` is invoked on line 7.

*/