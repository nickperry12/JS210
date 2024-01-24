function arrayToString(array) {
  let string = ''
  
  for (index = 0; index < array.length; index += 1) {
    string += String(array[index]);
  }

  return string;
}

console.log(arrayToString([1, 2, 'a', 'b', 4]));