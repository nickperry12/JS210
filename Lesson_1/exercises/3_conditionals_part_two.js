if (condition1) {
  // ...
  if (condition2) {
    // ...
  } else {
    // ...
  }
} else {
  // ...
  if (condition4) {
    // ...
    if (condition5) {
    // ...
    }
  }
}

/* 

One of the ways to manage the flow of a program is through the use of
conditionals. Go over the code below and specify how many unique execution paths
are possible.

First path: condition 1 is met and we get to condition 2
Second path: condition 1 is met, condition 2 is not, we got to not condition 2
Third path: condition 1 is not met (else clause)
Fourth path: condition 1 is not met, condition 4 is executed
Fifth path: condition 1 is not met, condition 4 is not met, condition 5 executes

LS Solution:

Path 1: condition1 --> condition2
Path 2: condition1 --> not condition2
Path 3: not condition1
Path 4: not condition1 --> condition4
Path 5: not condition1 --> condition4 --> condition5

*/