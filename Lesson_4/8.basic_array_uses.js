/*

Write a function that returns the first element of an array passed in as an
argument

*/

function firstElementOf(array) {
  return array[0];
}

/*

Write a function that returns the last element of an array passed in as an
argument

*/

function lastElementOf(array) {
  return array[array.length - 1];
}

/*

Write a function that accepts two arguments, an array and an integer index
position, and returns the element at the given index. What happens if the index
is greater than the length of the array? What happens if it is a negative
integer?

*/

function nthElementOf(array, index) {
  return array[index];
}


/*

Can we insert data into an array at a negative index? If so, why is this
possible?

LS Solution:

Yes, we can do this since all arrays are objects in JavaScript. You will learn
more about this in the next lesson, but for now, try these statements on the
digits array you used above and examine the return values.

*/

/*

Write a function that accepts an array as the first argument and an integer
value, count, as the second. It should return a new array that contains the
first count elements of the array.

*/

function firstNOf(array, count) {
  let countedItems = [];

  for (let index = 0; index < count; index += 1) {
    countedItems[index] = array[index];
  }

  return countedItems;
}

/*

Write a function like the previous one, except this time return the last count
elements as a new array.

*/

function lastNOf(array, count) {
  let index = array.length - count;

  if (index < 0) {
    index = 0;
  }

  return array.slice(index);
}

/*

Using the function from the previous problem, What happens if you pass a count
greater than the length of the array? How can you fix the function so it returns
a new instance of the entire array when count is greater than the array length?

When we pass in an argument that is greater than the length of the array, the
argument that we pass into the `slice` method within the function will become a
negative number; the index at which we want to select elements from will become
a negative number. To fix this we can add a guard clause that reassigns the
index value to `0` if the length minus the count results in a negative number.

*/

/*

Write a function that accepts two arrays as arguments and returns an array with
the first element from the first array and the last element from the second
array.

*/

function endsOf(startArr, endArr) {
  return [startArr[0], endArr[endArr.length - 1]];
}