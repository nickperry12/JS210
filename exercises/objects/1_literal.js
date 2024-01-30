// Literal

// Identify the bug in the following code. Don't run the code until after you've
// tried to answer.

const myObject = {
  a: 'name',
  'b': 'test',
  123: 'c',
  1: 'd',
};

myObject[1];
myObject[a];
myObject.a;

/*

The issue with the above code stems from line 14. We're attempting to reference
the `a` key using bracket notation. However, when JavaScript parses through the
code, it's going to look for a variable `a` to pass into the `[]` operator; no
`a` variable has been declared or initialized, and an error is thrown when we
attempt to run the code.

When using bracket notation to access an object property, the operand within the
brackets must be a string. If the object is not a string, JavaScript will
attempt to coerce the object to a string. If the operand is a variable,
JavaScript attempts to find the value, converts it to a string if necessary, and
uses the value as the key to find the corresponding value.

*/