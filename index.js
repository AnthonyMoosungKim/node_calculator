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


// const arrOperators = ["+", "-", "*", "/"];

const objOperators = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
  "/": (a, b) => a / b
};

const arrOperators = Object.keys(objOperators);

const operatorListMessage = (operatorList) => {
  let str = '';
  for (let i = 0; i < operatorList.length; i++) {
    if (i != operatorList.length - 1) {
      str += `'${operatorList[i]}', `;
    } else {
      str += `or '${operatorList[i]}'`;
    }
  }
  return str;
};

function getOperator(operatorList) {
  const operator = rs.question("What operation would you like to perform? ");
  if (operatorList.includes(operator)) {
    return operator;
  } else {
    console.log("That is not a valid operator.");
    console.log(`Please enter either a ${operatorListMessage(operatorList)}`);
    return getOperator(operatorList);
  }
};

function getNumber(order) {
  return rs.questionInt(`Please enter the ${order} number. `);
};

function calculate(objOperations, operator, firstNumber, secondNumber) {
  return objOperations[operator](firstNumber, secondNumber);
};

const calculator = objOp => {
  const operatorList = Object.keys(objOp);
  const operator = getOperator(operatorList);
  const firstNumber = getNumber("first");
  const secondNumber = getNumber("second");
  const result = calculate(objOp, operator, firstNumber, secondNumber);
  console.log( "The result is: ", result);
};

calculator(objOperators);