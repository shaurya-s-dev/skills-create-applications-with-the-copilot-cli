#!/usr/bin/env node

// Supported operations: addition, subtraction, multiplication, and division.

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error('Division by zero is not allowed.');
  }

  return a / b;
}

function parseNumber(value, label) {
  const parsed = Number(value);

  if (Number.isNaN(parsed)) {
    throw new Error(`Invalid ${label}: "${value}"`);
  }

  return parsed;
}

function calculate(operation, leftValue, rightValue) {
  const left = parseNumber(leftValue, 'left operand');
  const right = parseNumber(rightValue, 'right operand');

  switch (operation) {
    case 'add':
    case '+':
      return add(left, right);
    case 'subtract':
    case '-':
      return subtract(left, right);
    case 'multiply':
    case '*':
    case 'x':
    case '×':
      return multiply(left, right);
    case 'divide':
    case '/':
    case '÷':
      return divide(left, right);
    default:
      throw new Error(`Unsupported operation: ${operation}`);
  }
}

function main(argv) {
  const [operation, leftValue, rightValue] = argv;

  if (!operation || leftValue === undefined || rightValue === undefined) {
    console.log('Usage: node src/calculator.js <add|subtract|multiply|divide> <left> <right>');
    process.exitCode = 1;
    return;
  }

  try {
    const result = calculate(operation, leftValue, rightValue);
    console.log(result);
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
}

if (require.main === module) {
  main(process.argv.slice(2));
}

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  calculate,
};
