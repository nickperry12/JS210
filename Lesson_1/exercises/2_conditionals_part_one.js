const myBoolean = true;
const myString = 'hello';
const myArray = [];
const myOtherString = '';

if (myBoolean) {
  console.log('Hello');
}

if (!myString) {
  console.log('World');
}

if (!!myArray) {
  console.log('World');
}

if (myOtherString || myArray) {
  console.log('!');
}

/* 

Go over the following program. What does it log to the console at lines 7, 11,
15, and 19? Is it what you expected? Why or why not?

Solution:

Line 7 will log `'Hello'` because the conditional evaluates to `true`. Line 11
won't log anything; the string `'hello'` that is assigned to `myString`
evaluates to a truthy value, but the Logical Not `!` operator causes it to
instead return `false`. Line 15 will log `'World'`; an empty array evalutes to a
truthy value, and a single Logical Not `!` operator would cause this to evaluate
to false, but because there are two, the `false` returned value now gets
evaluated to `true`. Line 19 will log `'!'`; the conditional is using the
logical Or `||` operator; `myOtherString` evaluates to `false`, `myArray` is
then evaluated, which evaluates to `true` and the block of code is executed.

*/

