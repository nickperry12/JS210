/*

Write a function named objectHasProperty that takes two arguments: an Object and
a String. The function should return true if the Object contains a property with
the name given by the String, false otherwise.

*/

function objectHasProperty(object, property) {
  if (object[property] === undefined) {
    return false;
  } else {
    return true;
  }
}

let car = {
  make: 'ford',
  model: 'fusion',
  amountAvailable: 1,
}

console.log(objectHasProperty(car, 'year')); // should log false
console.log(objectHasProperty(car, 'model')); // should log true

/*

Write a function named incrementProperty that takes two arguments: an Object and
a String. If the Object contains a property with the specified name, the
function should increment the value of that property. If the property does not
exist, the function should add a new property with a value of 1. The function
should return the new value of the property.

*/

function incrementProperty(object, property) {
  if (objectHasProperty(object, property)) {
    object[property] += 1;
  } else {
    object[property] = 1;
  }

  return object[property];
}

console.log(car.amountAvailable); // should log 1
console.log(incrementProperty(car, 'amountAvailable')); // should return 2
console.log(car.amountAvailable); // should log 2

/*

Write a function named copyProperties that takes two Objects as arguments. The
function should copy all properties from the first object to the second. The
function should return the number of properties copied.

*/

function copyProperties(objectOne, objectTwo) {
  let objectKeys = Object.keys(objectOne);

  for (let key in objectKeys) {
    objectTwo[key] = objectOne[key];
  }

  return Object.keys(objectTwo).length;
}

console.log(Object.keys(car).length); // logs 3
let anotherCar = {};
console.log(copyProperties(car, anotherCar)); // should log 3

/*

Write a function named wordCount that takes a single String as an argument. The
function should return an Object that contains the counts of each word that
appears in the provided String. In the returned Object, you should use the words
as keys, and the counts as values

Split the string into a collection of words
Set wordCount to an empty object
Iterate through the collection of words
- Set each word as a property of wordCount
  - If the property already exists, increment the value by 1
  - If the property does not exist, set the intial value to 1

Return wordCount object

*/

function wordCount(string) {
  let words = string.split(' ');
  let wordCount = {};

  for (let word of words) {
    if (wordCount[word]) {
      wordCount[word] += 1;
    } else {
      wordCount[word] = 1;
    }
  }

  return wordCount;
}

let string = 'Hello my name is Nick and this is going to be a long string ' + 
             'by the way did I mention my name is Nick'

console.log(wordCount(string));
