/*

Write a program to determine a student’s grade based on the average of three
scores you get from the user. Use these rules to compute the grade:

If the average score is greater than or equal to 90 then the grade is 'A'
If the average score is greater than or equal to 70 and less than 90 then the
grade is 'B'
If the average score is greater than or equal to 50 and less than 70 then the
grade is 'C'
If the average score is less than 50 then the grade is 'F'
You may assume that all input values are valid positive integers.

// prompts to get the 3 scores
Enter score 1: 90
Enter score 2: 50
Enter score 3: 78

// log to the console
Based on the average of your 3 scores your letter grade is "B".

P:

We want to create a program that calcualtes the grade of the user. The program
should prompt the user 3 times to enter 3 different scores. The program should
then calculate the average, and return a grade based on that average.

-- Modeling:

Possible time to use a `switch` statement

General flow:

Prompt user for first score => prompt user for second score => prompt user for third score

Calculate average of scores => identify the grade => output grade to user

E:

See problem statement

A:

Define a function `getScores`
- Prompt the user to enter the first score
  - Declare and initialize `scoreOne` to user input
- Prompt the user to enter the second score
  - Declare and initialize `scoreTwo` to user input
- Prompt the user to enter the third score
  - Declare and initialize `scoreThree` to user input
- Push all scores into a collection
- Return collection of scores

Define a function `getGrade`
- Declare `scoresAverage`
  - Invoke `getScores` and find the average of the scores by summing the values
    dividing by the collection size
  - Initialize `scoresAverage` to the average
- Find the users grade based on the average and return the grade
  - If the average score is greater than or equal to 90 then the grade is 'A'
  - If the average score is greater than or equal to 70 and less than 90 then the
    grade is 'B'
  - If the average score is greater than or equal to 50 and less than 70 then the
    grade is 'C'
  - If the average score is less than 50 then the grade is 'F'

*/

const rlSync = require('readline-sync');

function getScores() {
  let score1 = rlSync.question('Please enter the first score:\n');
  let score2 = rlSync.question('Please enter the second score:\n');
  let score3 = rlSync.question('Please enter the third score:\n');

  let scores = [];

  scores.push(Number(score1), Number(score2), Number(score3));
  return scores;
}

function getAverageScores() {
  let scores = getScores();
  let average = (scores.reduce((acc, ele) => acc + ele, 0)) / scores.length;
  return average;
}

function findGrade() {
  let grade = getAverageScores();
  if (grade >= 90) {
    console.log(`Your score is ${grade}, you got an 'A'!`);
  } else if (grade >= 70 && grade < 90) {
    console.log(`Your score is ${grade}, you got a 'B'!`);
  } else if (grade >= 50 && grade < 70) {
    console.log(`Your grade is ${grade}, you got a 'C'!`);
  } else {
    console.log(`Your score is ${grade}. You got an 'F'.`);
  };
}

findGrade();