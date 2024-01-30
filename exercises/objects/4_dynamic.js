// Dynamic

// What will the following code log to the console and why? Don't run the code
// until after you have tried to answer.

const myObject = {
  prop1: '123',
  prop2: '234',
  'prop 3': '345',
};

const prop2 = '456';
myObject['prop2'] = '456';
myObject[prop2] = '678';

console.log(myObject[prop2]); // 678
console.log(myObject.prop2);  // 456

/*
Line 16 will log `678` and line 17 will log `456`. On line 6, the variable
`myObject` is declared and initialized to an Object containing the keys `prop1`,
`prop2` and `'prop 3'`, with the values `'123'`, '234'`, and `'345'`,
respectively.

On line 12, the variable `prop2` is declared and initialized to the string
`'456'`. On line 13 we use bracket notation to access the key `'prop2'`, and
reassign it to the value `'456'`. On line 14, we use bracket notation to create
a new Object property, and and assign it a value of `'678'`. The key value pair
looks like this: `'456' : '678'`. When we use bracket notation with the operand
`prop2`, the key being created is `'456'`. Variables can be used to access or
create properties (keys) in an object, as variables can contain an expression.
In this case, the expression is `'456'`.

This demonstrates the difference between using "dot" notation and bracket
notation. When we use bracket notation and use a variable as the operand, the
expression contained in the variable is used as the key. In contrast, when using
"dot" notation, even though it may look like we're using a variable name with
`myObject.prop2`, we're actually using a string literal to access the key.
`myObject.prop2` is the equivalent of `myObject['prop2']`.

*/