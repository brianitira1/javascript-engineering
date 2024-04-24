//modules in javascript

import { add, sub, multiply, divide } from  "./task13calculator.js";
import { createInterface } from "readline";

const readline = createInterface({
  input: process.stdin,
  output: process.stdout
});

function askQuestion(question) {
  return new Promise((resolve) => readline.question(question, resolve));
}

async function main() {
  try {
    const num1 = parseFloat(await askQuestion("Enter first number: "));
    const num2 = parseFloat(await askQuestion("Enter second number: "));
    const operation = await askQuestion("Enter operation (+, -, *, /): ");

    let result;
    switch (operation) {
      case "+":
        result = add(num1, num2);
        break;
      case "-":
        result = sub(num1, num2);
        break;
      case "*":
        result = multiply(num1, num2);
        break;
      case "/":
        result = divide(num1, num2);
        break;
      default:
        console.error("Invalid operation");
        break;
    }

    if (result !== undefined) {
      console.log(`Result: ${result}`);
    }
  } catch (error) {
    console.error(error.message);
  } finally {
    readline.close();
  }
}

main();



