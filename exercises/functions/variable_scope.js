function someFunction() {
  myVar = 'This is global';
}

someFunction();
console.log(myVar);

/*

Variable Scope

What will the following code log to the console and why? Don't run the code
until after you have tried to answer.

Answer:

Line 6 will log `'This is global'`. When `someFunction()` is invoked on line 5,
it attempts to assign the string `'This is global'` to the `myVar` variable.
JavaScript will search lexically for a variable of this name, and will not find
it in the function's scope, nor will it find it in the main scope; since a
matching variable name could not be found, a global variable with the name
`myVar` is created. Because `myVar` is global, it is available to `console.log` 
in the main scope, and is why `'This is global'` is logged on line 6.

Side note:

It's important to know that in the absence of this declaration, not only is the
global variable `myVar` created, it's also attached to the global property.

*/