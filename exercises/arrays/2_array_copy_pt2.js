let myArray = [1, 2, 3, 4];
const myOtherArray = copyArray(myArray);

myArray.pop();
console.log(myOtherArray);

myArray = [1, 2];
console.log(myOtherArray);


// In the previous exercise, the value of the reference gets copied. For this
// exercise, only the values of the array should be copied, but not the
// reference. Implement two alternative ways of doing this.

// Creating a new array with a function that pushes in the values of the array
// passed in into a new array

function copyArray(arr) {
  let newArr = [];

  for (let index = 0; index < arr.length; index += 1) {
    newArr.push(arr[index]);
  }

  return newArr;
}

// Using the `slice` method which returns a new array

myOtherArray = myArray.slice();
