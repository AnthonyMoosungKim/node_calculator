const rs = require('readline-sync');

function oneLine() {
  single = rs.question("Type in your math problem. ");
  const arrayOfInput = single.split(' ').map(numberOrOp => numberOrOp.trim()).filter(numberOrOp => numberOrOp !== '');

  if (arrayOfInput[0] == Number(arrayOfInput[0]) && arrayOfInput[2] == Number(arrayOfInput[2])) {
    if (arrayOfInput[1] === '+') {
      return Number(arrayOfInput[0]) + Number(arrayOfInput[2]);
    } else if (arrayOfInput[1] === '-') {
      return Number(arrayOfInput[0]) - Number(arrayOfInput[2]);
    } else if (arrayOfInput[1] === '*') {
      return Number(arrayOfInput[0]) * Number(arrayOfInput[2]);
    } else if (arrayOfInput[1] === '/') {
      return Number(arrayOfInput[0]) / Number(arrayOfInput[2]);
    } else {
      console.log("Sorry, but this is not an optimal basic math equation.");
      nodeCalculator();
    }
  } else {
    console.log("Sorry, but this is not an optimal basic math equation.");
    oneLine();
  }
}

console.log(oneLine());