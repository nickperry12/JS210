/*

Write a password guessing program that tracks how many times the user enters the
wrong password. If the user enters the password wrong three times, log 'You have
been denied access.' and terminate the program. If the password is correct, log
'You have successfully logged in.' and end the program.

// password = 'password'

// The program displays a dialog that asks the user to enter a password.
// If the user enters the wrong password, keep asking up to three times. After
// three failures, log the access denied.

What is the password: 123
What is the password: opensesame
What is the password: letmein

// message on the console
You have been denied access.

// If the user enters the right password, report login success.
What is the password: password

// message on the console
You have successfully logged in.

P:

We need to write a small password guessing program. A prompt should ask the user
to enter the password. The user should have a total of 3 attempts. If they do
not enter the correct password with 3 attempts, then the program should state
that access has been denied, and program execution ends.

-- Modeling

General flow:

Prompt the user with the number of attempts left => user enters password
- State 'You have successfully logged in.' if the password is correct and cease
  execution
- If not, prompt to enter password again with attempts left

After 3 unsuccessful attempts, state access has been denied, cease execution of program.

E:

See above

D:

Looping structure

A:

Declare `password` and initialize to `'secret'`
Declare `passwordAttempts` and initialize to `3`

Declare and initialize `passwordPrompt`
- Initialize to the message 'Please enter the password. You have `x` attempts left.'
  - Interpolate the number of attempts

Define a function `enterPassword`
- While `passwordAttempts` is greater than 0
  - Prompt the user with `passwordPrompt`
  - If the password they enter is correct
    - Prompt a success message
    - Break out of loop
  - If the password is incorrect
    - Decrement `passwordAttempts` by 1
    - Prompt the password is incorrect
  - After 3 unsuccesul attempts, prompt 'access denied'
    - Breakout of loop
*/

const rlSync = require('readline-sync');
let password = 'secret';
let passwordAttempts = 3;

function enterPassword() {
  while (passwordAttempts > 0) {
    let passwordPrompt = `Please enter the password. You have ${passwordAttempts} left.\n`;
    let userInput = rlSync.question(passwordPrompt);
    console.log(userInput);
    
    if (userInput === password) {
      console.log('You have successfully signed in.');
      return;
    } else {
      passwordAttempts -= 1;
      if (passwordAttempts > 0) console.log('Invalid password. Try again!');
    };
  };

  console.log('You have been denied access.');
}

enterPassword();