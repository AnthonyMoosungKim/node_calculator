const rs = require('readline-sync');

/*
Ask the user, "What operation would you like to perform?"
Then the user enters one of these options: "/" "*" "-" "+"
If the user enters an invalid character, print: "That is not a valid operation" and then restart the program
After the user enters a valid operation, ask the user, "Please enter the first number"
The user then enters the first number. If the user enters something that is not a number, print: “This is not a number” and then re-ask the question
After a valid number is entered, ask the user, "Please enter the second number". Perform the same error handling as before
Then create a function to perform the proper math operation and print the result as: "The result is: X" where "X" is the actual result
For example, if the user entered addition "+" and the first number was 3 and the second number was 4, the result printed would be: "The result is 7"

Handle remainders properly (modulo). Example : 9 divided by 4 would print 2.25
Make the program more elegant by allowing the user to enter an entire operation on one line such as: "6 / 6" or "5 * 3" (Hint use arguments to solve this)
*/

let start = null;
let operator = null;
let firstNumber = null;
let secondNumber = null;
let answer = null;

function nodeCalculator () {
  start = rs.keyInYN("Would you like to calculate step by step?");
  
  if (start) {
    console.log("Okay.");
    stepByStep();
  } else {
    oneLine();
  }
}

function stepByStep() {
  operator = rs.question("What operation would you like to perform? ");
  if (
    operator === '+'
    || operator === '-'
    || operator === '*'
    || operator === '/'
  ) {
    firstNumberInput();
  } else {
    console.log("That is not a valid operator.");
    console.log("Please enter either a '+', '-', '*', or '/'.");
    nodeCalculator();
  }
}

function firstNumberInput() {
  firstNumber = rs.questionInt('Please enter the first number. ');
  secondNumberInput();
}

function secondNumberInput() {
  secondNumber = rs.questionInt('Please enter the second number. ');
  if (operator === '+') {
    return answer = firstNumber + secondNumber;
  } else if (operator === '-') {
    return answer = firstNumber - secondNumber;
  } else if (operator === '*') {
    return answer = firstNumber * secondNumber;
  } else if (operator === '/') {
    return answer = firstNumber / secondNumber;
  }
}

function oneLine() {
  single = rs.question("Type in your math problem. ");
  const arrayOfInput = single.split(' ').map(numberOrOp => numberOrOp.trim()).filter(numberOrOp => numberOrOp !== '');

  if (arrayOfInput[0] == Number(arrayOfInput[0]) && arrayOfInput[2] == Number(arrayOfInput[2])) {
    if (arrayOfInput[1] === '+') {
      return answer = Number(arrayOfInput[0]) + Number(arrayOfInput[2]);
    } else if (arrayOfInput[1] === '-') {
      return answer = Number(arrayOfInput[0]) - Number(arrayOfInput[2]);
    } else if (arrayOfInput[1] === '*') {
      return answer = Number(arrayOfInput[0]) * Number(arrayOfInput[2]);
    } else if (arrayOfInput[1] === '/') {
      return answer = Number(arrayOfInput[0]) / Number(arrayOfInput[2]);
    } else {
      console.log("Sorry, but this is not an optimal basic math equation.");
      nodeCalculator();
    }
  } else {
    console.log("Sorry, but this is not an optimal basic math equation.");
    nodeCalculator();
  }
}



nodeCalculator();
console.log(answer);
