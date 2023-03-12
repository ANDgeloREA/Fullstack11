//const sum = function (a, b) {
//  return a + b;
//}

//const subtract = function (a, b) {
//  return a - b;
//}

//const multiply = function (a, b) {
//  return a * b;
//}

//const divide = function (a, b) {
//  return a / b;
//}

//const log = function (value) {
//  console.log(value);
//}

const sum = (a, b) => {
  return a + b;
}

const subtract = (a, b) => {
  return a - b;
}

const multiply = (a, b) => {
  return a * b;
}

const divide = (a, b) => {
  return a / b;
}

let firstOperation = sum(2, 4);

let secondOperation = sum(2, 5);

let tirthOperation = multiply(firstOperation, secondOperation);

let fourthOperation = subtract(tirthOperation, 2);

let fifthOperation = divide(fourthOperation, 5);


const log = (value) => {
  value = fifthOperation;
  console.log(value);
}

log();