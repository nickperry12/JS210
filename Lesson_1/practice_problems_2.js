// 1. The result of the following calculation is a string. Using type coercion,
//    correct the calculation to produce the numeric result instead.

let x = '13';
let y = 9;

console.log(x * y);

// 3. Convert the three parts of this telephone number to strings to produce a
//    valid number.

let npa = 212;
let nxx = 555;
let num = 1212;

console.log(npa.toString() + nxx.toString() + num.toString());

// 4. You can also use the `String` constructor to create Strings from numbers.
//    This is a function that takes an argument and converts it to a string. Try
//    it using the previous block of code; wrap each number in a call to
//    `String`.

console.log(String(npa) + String(nxx) + String(num));

// 5. The toString method is yet another way to convert values to strings. Try
//    using toString to convert a boolean and an array to a String. Did you get
//    the result you expected?

let bool = true;
let arr = [1, 2, 3];

console.log(bool.toString());
console.log(arr.toString());