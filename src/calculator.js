#!/usr/bin/env node

// Supported operations: addition, subtraction, multiplication, division, modulo, power, and square root.

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

function modulo(a, b) {
  if (b === 0) {
    throw new Error('Modulo by zero is not allowed.');
  }

  return a % b;
}

function power(base, exponent) {
  return base ** exponent;
}

function squareRoot(n) {
  if (n < 0) {
    throw new Error('Square root of a negative number is not allowed.');
  }

  return Math.sqrt(n);
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

  switch (operation) {
    case 'add':
    case '+':
      if (rightValue === undefined) {
        throw new Error(`Missing right operand for operation: ${operation}`);
      }
      return add(left, parseNumber(rightValue, 'right operand'));
    case 'subtract':
    case '-':
      if (rightValue === undefined) {
        throw new Error(`Missing right operand for operation: ${operation}`);
      }
      return subtract(left, parseNumber(rightValue, 'right operand'));
    case 'multiply':
    case '*':
    case 'x':
    case '×':
      if (rightValue === undefined) {
        throw new Error(`Missing right operand for operation: ${operation}`);
      }
      return multiply(left, parseNumber(rightValue, 'right operand'));
    case 'divide':
    case '/':
    case '÷':
      if (rightValue === undefined) {
        throw new Error(`Missing right operand for operation: ${operation}`);
      }
      return divide(left, parseNumber(rightValue, 'right operand'));
    case 'mod':
    case 'modulo':
    case '%':
      if (rightValue === undefined) {
        throw new Error(`Missing right operand for operation: ${operation}`);
      }
      return modulo(left, parseNumber(rightValue, 'right operand'));
    case 'power':
    case '^':
    case '**':
      if (rightValue === undefined) {
        throw new Error(`Missing right operand for operation: ${operation}`);
      }
      return power(left, parseNumber(rightValue, 'right operand'));
    case 'sqrt':
    case 'squareRoot':
    case '√':
      return squareRoot(left);
    default:
      throw new Error(`Unsupported operation: ${operation}`);
  }
}

function main(argv) {
  const [operation, leftValue, rightValue] = argv;

  if (!operation || leftValue === undefined) {
    console.log('Usage: node src/calculator.js <operation> <left> [right]');
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
  modulo,
  power,
  squareRoot,
  calculate,
};
