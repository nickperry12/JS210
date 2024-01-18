/*

Create a function that computes the Greatest Common Divisor of two positive integers.

Examples:

gcd(12, 4);   // 4
gcd(15, 10);  // 5
gcd(9, 2);    // 1

P:

We want to create a function that computes the Greatest Common Divisor of two
positive integers. The Greatest Common Divisor of two or more integers, which 
are not all zero, is the largest positive integer taht divides each of the
integers.

-- Modeling

We can use the Eclidean algorithm.

Given two integers (a, b), the algorithm replaces (a, b) with (b, a % b) 
repeatedly until the pair is (d, 0), where `d` is the greatest common divisor.

I: (15, 10)
O: 5

Store both values into an array => [15, 10]
Sort the array from low to high => [10, 15]
Transform the array to [10, (15 % 10)] => [10, 5]

Repeat until we have [d, 0]

[10, 5] => [5, (10 % 5)] => [5, 0] => [0, 5]

Return index 1

A:

/-- Given two positive integers greater than 0 --/

If both integers are less than `1`
- Output "Cannot find the Great Common Divisor, both integers are less than 1."

Store both integers into a collection called `numbers`

Until the integer at index 0 is equal to 0
- Sort the array from low to high
- Reassign the element at index 1 to (element 2 % element 1)

Return element at index 1

*/

function gcd(numOne, numTwo) {
  let numbers = [numOne, numTwo];

  while (numbers[1] > 0) {
    numbers.sort((a, b) => a - b);
    numbers[1] = numbers[1] % numbers[0];
  }

  console.log(numbers[0]);
  return numbers[0];
}

gcd(12, 4);   // 4
gcd(15, 10);  // 5
gcd(9, 2);    // 1
