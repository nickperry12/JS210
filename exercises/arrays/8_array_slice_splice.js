/*
Array Slice and Splice

In this exercise, you will implement your own versions of the
Array.prototype.slice and Array.prototype.splice methods according to the
following specifications.

The slice function takes three arguments: an array, and two integers
representing a begin and an end index. The function returns a new array
containing the extracted elements starting from begin up to but not including
end. slice does not mutate the original array.

The splice function changes the contents of an array by deleting existing
elements and/or adding new elements. The function takes the following arguments:
an array, a start index, a deleteCount, and zero or more elements to be added.
The function removes deleteCount number of elements from the array, beginning at
the start index. If any optional element arguments are provided, splice inserts
them into the array beginning at the start index. The function returns a new
array containing the deleted elements, or an empty array ([]) if no elements are
deleted. splice mutates the original array.

Additional specifications:

slice:

The values of begin and end will always be integers greater than or equal to 0.

If the value of begin or end is greater than the length of the array, set it to
equal the length.

splice:

The values of start and deleteCount will always be integers greater than or
equal to 0.

If the value of start is greater than the length of the array, set it to equal
the length.

If the value of deleteCount is greater than the number of elements from start up
to the end of the array, set deleteCount to the difference between the array's
length and start.

Takes optional arguments for elements to add to the array; denoted by the rest
parameter ...args. If no elements to add are provided, splice only removes
elements from the array.

[1, 2, 3, 4]
start is index 2
delete count is 4

elements from start to end => 3
delete count gets set to array length (4) - start (2) => 2

*/

function unshift(array, ...elements) {
  let tempArray = [];

  for (item of array) {
    tempArray.push(item);
  }

  array.length = elements.length;

  for (let index in elements) {
    array[index] = elements[index];
  }

  for (let index = 0; index < tempArray.length; index += 1) {
    array.push(tempArray[index]);
  }

  return array.length;
}

function slice(array, begin, end) {
  begin = begin > array.length ? array.length : begin;
  end = end > array.length ? array.length : end;
  let newArray = [];

  for (let index = begin; index < end; index += 1) {
    newArray.push(array[index]);
  }

  return newArray;
}

// console.log(slice([1, 2, 3], 1, 2));               // [2]
// console.log(slice([1, 2, 3], 2, 0));               // []
// console.log(slice([1, 2, 3], 5, 1));               // []
// console.log(slice([1, 2, 3], 0, 5));               // [1, 2, 3]

// const arr1 = [1, 2, 3];
// console.log(slice(arr1, 1, 3));                     // [2, 3]
// console.log(arr1);                                  // [1, 2, 3]

/*
A:

Given `array`, `start`, `deleteCount`, `...args`

Set `endIndex` to length of `array` minus `1`

If `deleteCount` is greater than `endIndex` minus `start`
- Set `deleteCount` to the length of `array` minus `start`

Set numOfItemsToRemove = deleteCount;
Set removedItems to an empty collection
Set tempArray to an empty collection

Using `start` as the starting `index` value
- Iterate through `array`
  - Push the item at `index` into `removedItems` if `numOfItemsToRemove` is
    greater than or equal to 0
  - Increment index by 1
  - Decrement `numOfItemsToRemove` by 1
  - If `numOfItemsToRemove` is 0, push the item at `index` into `tempArray`

Set the length of `array` to the length of `array` minus (`deleteCount`+ 1)

If the length of `args` is greater than 0
- Push the items into array

Push all the items in `tempArray` into `array`
Return `removedItems`
*/

function splice(array, start, deleteCount, ...args) {
  let endRemoveIndex = (start + deleteCount);
  start = start > array.length ? array.length : start;
  deleteCount = deleteCount > (array.length - start) ? array.length - start : deleteCount;

  let removedItems = [];
  let tempArray = [];

  for (let index = start; index < array.length; index += 1) {
    if (index < endRemoveIndex) {
      removedItems.push(array[index]);
    } else {
      tempArray.push(array[index]);
    }
  }
  
  array.length = start;
  if (args.length > 0 ) args.forEach(item => array.push(item));
  tempArray.forEach(item => array.push(item));
  return removedItems;
}

console.log(splice([1, 2, 3], 1, 2));              // [2, 3]
console.log(splice([1, 2, 3], 1, 3));              // [2, 3]
console.log(splice([1, 2, 3], 1, 0));              // []
console.log(splice([1, 2, 3], 0, 1));              // [1]
console.log(splice([1, 2, 3], 1, 0, 'a'));         // []

const arr2 = [1, 2, 3];
console.log(splice(arr2, 1, 1, 'two'))             // [2]
console.log(arr2);                                  // [1, "two", 3]

const arr3 = [1, 2, 3];
console.log(splice(arr3, 1, 2, 'two', 'three'));    // [2, 3]
console.log(arr3);                                  // [1, "two", "three"]

const arr4 = [1, 2, 3];
console.log(splice(arr4, 1, 0));                    // []
console.log(splice(arr4, 1, 0, 'a'));               // []
console.log(arr4);                                  // [1, "a", 2, 3]

const arr5 = [1, 2, 3];
console.log(splice(arr5, 0, 0, 'a'));               // []
console.log(arr5);                                  // ["a", 1, 2, 3]