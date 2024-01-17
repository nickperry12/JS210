/*

Write a function that iterates over the integers from 1 to 100, inclusive. For
multiples of three, log "Fizz" to the console. For multiples of five, log
"Buzz". For numbers which are multiples of both three and five, log "FizzBuzz".
For all other numbers, log the number.

Your output should look like this:

fizzbuzz();

1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz … rest of output
omitted for brevity

P:

We want to create a function `fizzbuzz` that iterates over the numbers between 1
to 100 (inclusive). If the current number on iteration is a multiple of 3, we
should log the string `'Fizz'`, if it's a multiple of five we should log
`'Buzz'`, and if it's a multiple of both, it should log `'FizzBuzz'`. If none
of the above criteria is met, the number itself should be logged.

E:

See above

D:

Looping structure

A:

Define a function called `fizzbuzz`

Initialize `number` to `1`

While `number` is less than or equal to 100
- If `number` is a multiple of `3` and `5`
  - Log `FizzBuzz`
- If `number` is a multiple of `3`
  - Log 'Fizz'
- If `number` is a multiple of `5`
  - Log 'Buzz'
- If none of the criteria is met
  - Log `number`
- Increment `number` by `1`

*/

function fizzbuzz() {
  let number = 1;

  while (number <= 100) {
    if (number % 3 === 0 && number % 5 === 0) {
      console.log('FizzBuzz');
    } else if (number % 3 === 0) {
      console.log('Fizz');
    } else if (number % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(number)
    }

    number += 1;
  }
}

fizzbuzz();