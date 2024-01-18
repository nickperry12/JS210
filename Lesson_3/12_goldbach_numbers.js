/*

Write a function named checkGoldbach that uses Goldbach's Conjecture to log
every pair of primes that sum to the number supplied as an argument. The
conjecture states that "you can express every even integer greater than 2 as the
sum of two primes". The function takes as its only parameter, an integer
expectedSum, and logs all combinations of two prime numbers whose sum is
expectedSum. Log the prime pairs with the smaller number first. If expectedSum
is odd or less than 4, your function should log null.

checkGoldbach(3);
// logs: null

checkGoldbach(4);
// logs: 2 2

checkGoldbach(12);
// logs: 5 7

checkGoldbach(100);
// logs:
// 3 97
// 11 89
// 17 83
// 29 71
// 41 59
// 47 53

P:

We want to create a function that takes a single argument, an integer
`expectedSum`, that logs all the combinations of prime numbers that sum to the
argument. We want to log the prime pairs that are lower in value first. If the
`expectedSum` provided is an odd number of is less than 4, the function should
log `null`.

-- Modeling:

First we need to define a function that checks to see if the number is prime.
- A prime number is a number that is greater than 1, and is only evenly 
  divisible by `1` and itself.

To check if prime:
- if the number is less than 2, the number is not prime
- iterate through numbers 2 and the target number minus one
  - if the target number is evenly divisible by any number in this range, it is not prime
    - the function should return false if this is the case, true otherwise

Find all prime numbers:
- iterate through numbers 2 to target number minus one
  - if number is prime, add to a collection
- return the collection of prime numbers

To find goldbach's numbers:
- log `null` if `expectedSum` is odd or less than 4
- find all prime numbers that are lesser than `expectedSum`
- find all the prime numbers in the collection that sum to `expectedSum`
- initialize `primeSums` to an empty collection
  - iterate through the collection of prime nums in an outer iteration
    - initialize `outerIndex` to `0`
    - iterate at a second level through the collection of prime numbers
      - initialize `innerIndex` to the value of `outerIndex`
        - if the elements at `outerIndex` and `innerIndex` of the collection of
          prime nums sum to `expectedSum`, place them into a `primeSums`
- iterate through `primeSums`, log each value in each subarry
*/

function isPrime(int) {
  if (int < 2 ) return false;

  for (let num = 2; num < int - 1; num += 1) {
    if (int % num === 0) {
      return false;
    };
  }

  return true;
}

function findAllPrimes(targetNum) {
  let primeNumbers = [];

  for (let num = 2; num < targetNum; num += 1) {
    if (isPrime(num)) {
      primeNumbers.push(num);
    } else {
      continue
    };
  }

  return primeNumbers;
}

function checkGoldbach(expectedSum) {
  if (expectedSum < 4 || expectedSum % 2 === 1) {
    console.log(null);
    return;
  }

  let primeNums = findAllPrimes(expectedSum);
  let primeSums = [];

  for (let outerIndex = 0; outerIndex < primeNums.length; outerIndex += 1) {
    for (let innerIndex = outerIndex; innerIndex < primeNums.length; innerIndex += 1) {
      if (primeNums[outerIndex] + primeNums[innerIndex] === expectedSum) {
        primeSums.push([primeNums[outerIndex], primeNums[innerIndex]]);
      };
    }
  }

  primeSums.forEach((subarr) => console.log(subarr[0], subarr[1]));
}

checkGoldbach(1000000);