// The concat function from the previous exercise could only concatenate a
// maximum of two arrays. For this exercise, you are going to extend that
// functionality. Refactor the concat function to allow for the concatenation of
// two or more arrays or values.

function concat(arrayOne, ...args) {
  let newArray = [];
  arrayOne.forEach(item => newArray.push(item));

  args.forEach((item) => {
    if (Array.isArray(item)) {
      for (let index = 0; index < item.length; index += 1) {
        newArray.push(item[index]);
      }
    } else {
      newArray.push(item);
    }
  });

  return newArray;
}


console.log(concat([1, 2, 3], [4, 5, 6], [7, 8, 9]));    // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(concat([1, 2], 'a', ['one', 'two']));        // [1, 2, "a", "one", "two"]
console.log(concat([1, 2], ['three'], 4));               // [1, 2, "three", 4]