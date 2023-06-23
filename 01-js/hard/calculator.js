/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
  - `npm run test-calculator`
*/

class Calculator {
  constructor() {
    this.clear();
    this.operationsMap = {
      "+": "add",
      "-": "subtract",
      "*": "multiply",
      "/": "divide",
    };
  }
  add(input) {
    this.result += input;
  }
  subtract(input) {
    this.result -= input;
  }
  multiply(input) {
    this.result *= input;
  }
  divide(input) {
    let res = this.result / input;
    if (!isFinite(res)) {
      throw new Error(`Evaluated to ${res}`);
    }
    this.result = res;
  }
  clear() {
    this.result = 0;
  }
  getResult() {
    return this.result;
  }
  calculate2(expression) {
    let stack = new Array();
    expression = expression.replace(/([\(\)])/g, ` $1 `);
    expression.split(/\s+/).forEach((element) => {
      if (element == ")") {
        // perform the operation
        let ele2 = stack.pop();
        let operation = stack.pop();
        let ele1 = stack.pop();
        stack.pop(); // to pop opening brace
        let evaluation = ele1 + operation + ele2;
        let result = eval(evaluation);
        if (!isFinite(result)) {
          throw new Error(`${expression} evaluated to ${result}`);
        }
        stack.push(result);
      } else {
        stack.push(element);
      }
    });
    if (stack.length) {
      // To handle final remains in stack
      stack.push(eval(stack.join(" ")));
    }
    return stack.pop();
  }
  calculate(expression) {
    console.log(expression);
    let result = eval(expression);
    console.log(`evaluated to ${result}`);
    if (!isFinite(result)) {
      throw new Error(`${expression} evaluated to ${result}`);
    }
    this.result = result;
    return result;
  }
}

module.exports = Calculator;

console.log(
  new Calculator().calculate2(`10 +  ( 2 *    (   (6 - (4 + 1)) / 2)) + 7`)
);
