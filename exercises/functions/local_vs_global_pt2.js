var myVar = 'This is global';

function someFunction() {
  var myVar = 'This is local';
  console.log(myVar);
}

someFunction();

/*

Local vs Global Part 2

What will the following code log to the console and why? Don't run the code
until after you have tried to answer.

Answer:

This will log `'This is local'`. We have two `myVar` variables being declared.
The `myVar` variable that is declared and initialized on line 1 is decalred in
the outer scope, creating a global variable. The second `myVar` variable is
declared and initialized on line 4 within the `someFunction` function defintion
and is scoped local to the function. On line 5 when `console.log` is invoked,
the local function variable `myVar` is what gets passed in as an argument, and
its string value `'This is local'` is logged.

This demonstrates the concept of variable scope and variable shadowing.
JavaScript searches lexically for variables, and will first look within the
function when looking for the `myVar` variable. When the variable name is found
within the function, the search stops and the main scope `myVar` is ignored. In
addition, the global variable `myVar` and the local function variable `myVar`
both share the same name. The inner scoped `myVar` shadows the outer scoped
`myVar`, blocking it from being accessed from within `someFunction`.

*/