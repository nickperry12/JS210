// Welcome Stranger

/*

Write a function that takes two arguments, an array and an object. The array
will contain two or more elements that, when combined with spaces, produce a
person's full name. The object will contain two keys, title and occupation, and
suitable values for both items. Your function should log a greeting to the
console that uses the person's full name, and mentions the person's title and
occupation.

Example:

greetings(['John', 'Q', 'Doe'], { title: 'Master', occupation: 'Plumber' });

// console output
Hello, John Q Doe! Nice to have a Master Plumber around.


Set `name` to the joined strings of `arr`
- Separate each string with a space

Set `title` to the value of the `title` key from the given object
Set `occupation` to the value of the `occupation` key from the given object

Return a string greeting the name, followed by their title and occupation
*/

function greetings(array, object) {
  let name = array.join(' ');
  let title = object['title'];
  let occupation = object['occupation']

  console.log(`Hello, ${name}! Nice to have a ${title} ${occupation} around.`);
}


greetings(['John', 'Q', 'Doe'], { title: 'Master', occupation: 'Plumber' });