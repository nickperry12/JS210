// Literal Method

// In the following code, a user creates a person object literal and defines two
// methods for returning the person's first and last names. What is the result
// when the user tries out the code on the last line?

const person = {
  firstName() {
    return 'Victor';
  },
  lastName() {
    return 'Reyes';
  },
};

console.log(`${person.firstName} ${person.lastName}`);

/*

An empty string is being logged on line 16. The issue is the syntax -- we're
attempting to access the properties `firstName` and `lastName`, which will
return a function instead of invoking it, but because the `()` are not included
after the property names, the function doesn't get invoked, and the strings
aren't returned. To remedy the issue, `()` must be added after
`person.firstName` and `person.lastName`.

*/