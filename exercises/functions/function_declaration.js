logValue();

function logValue() {
  console.log('Hello, world!');
}


// What will the following code log to the console and why? Don't run the code
// until after you have tried to answer.

/*

The JavaScript engine has two phases when executing a program - the creation
phase and the execution phase. During the creation phase, JavaScript will search
through the codebase to find all variable, function and class delcarations. It
then hoists them to the top of their defined scope. In this case, the function
`logValue` is declared within the top level scope, and thus will be moved to the
top of the program. When rearranged it looks like this:

```
function logValue() {
  console.log('Hello, world!');
}

logValue();
```

As such, we are able to invoke functions before we declare and define them and
line 1 will log the string `'Hello, world!'` to the console. It's important to
note that hoisting is conceptual, the code isn't actually being rearranged prior
to execution.
*/