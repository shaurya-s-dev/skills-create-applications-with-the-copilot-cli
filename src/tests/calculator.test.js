const calculator = require('../calculator');

describe('calculator operations', () => {
  test('adds numbers', () => {
    expect(calculator.add(2, 3)).toBe(5);
    expect(calculator.calculate('+', 2, 3)).toBe(5);
    expect(calculator.calculate('add', 2, 3)).toBe(5);
  });

  test('subtracts numbers', () => {
    expect(calculator.subtract(10, 4)).toBe(6);
    expect(calculator.calculate('-', 10, 4)).toBe(6);
    expect(calculator.calculate('subtract', 10, 4)).toBe(6);
  });

  test('multiplies numbers', () => {
    expect(calculator.multiply(45, 2)).toBe(90);
    expect(calculator.calculate('*', 45, 2)).toBe(90);
    expect(calculator.calculate('multiply', 45, 2)).toBe(90);
    expect(calculator.calculate('×', 45, 2)).toBe(90);
  });

  test('divides numbers', () => {
    expect(calculator.divide(20, 5)).toBe(4);
    expect(calculator.calculate('/', 20, 5)).toBe(4);
    expect(calculator.calculate('divide', 20, 5)).toBe(4);
    expect(calculator.calculate('÷', 20, 5)).toBe(4);
  });

  test('calculates modulo', () => {
    expect(calculator.modulo(20, 6)).toBe(2);
    expect(calculator.calculate('%', 20, 6)).toBe(2);
    expect(calculator.calculate('mod', 20, 6)).toBe(2);
    expect(calculator.calculate('modulo', 20, 6)).toBe(2);
  });

  test('calculates power', () => {
    expect(calculator.power(2, 3)).toBe(8);
    expect(calculator.calculate('^', 2, 3)).toBe(8);
    expect(calculator.calculate('**', 2, 3)).toBe(8);
    expect(calculator.calculate('power', 2, 3)).toBe(8);
  });

  test('calculates square root', () => {
    expect(calculator.squareRoot(81)).toBe(9);
    expect(calculator.calculate('sqrt', 81)).toBe(9);
    expect(calculator.calculate('squareRoot', 81)).toBe(9);
    expect(calculator.calculate('√', 81)).toBe(9);
  });

  test('throws on division by zero', () => {
    expect(() => calculator.divide(20, 0)).toThrow('Division by zero is not allowed.');
    expect(() => calculator.calculate('/', 20, 0)).toThrow('Division by zero is not allowed.');
  });

  test('throws on modulo by zero', () => {
    expect(() => calculator.modulo(20, 0)).toThrow('Modulo by zero is not allowed.');
    expect(() => calculator.calculate('%', 20, 0)).toThrow('Modulo by zero is not allowed.');
  });

  test('throws on negative square root input', () => {
    expect(() => calculator.squareRoot(-1)).toThrow('Square root of a negative number is not allowed.');
    expect(() => calculator.calculate('sqrt', -1)).toThrow('Square root of a negative number is not allowed.');
  });

  test('rejects unsupported operations', () => {
    expect(() => calculator.calculate('unknown', 1, 2)).toThrow('Unsupported operation: unknown');
  });

  test('rejects invalid numeric input', () => {
    expect(() => calculator.calculate('+', 'abc', 2)).toThrow('Invalid left operand: "abc"');
    expect(() => calculator.calculate('+', 2, 'xyz')).toThrow('Invalid right operand: "xyz"');
  });

  test('requires right operand for binary operations', () => {
    expect(() => calculator.calculate('+', 1)).toThrow('Missing right operand for operation: +');
  });
});
