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

  test('throws on division by zero', () => {
    expect(() => calculator.divide(20, 0)).toThrow('Division by zero is not allowed.');
    expect(() => calculator.calculate('/', 20, 0)).toThrow('Division by zero is not allowed.');
  });

  test('rejects unsupported operations', () => {
    expect(() => calculator.calculate('mod', 1, 2)).toThrow('Unsupported operation: mod');
  });

  test('rejects invalid numeric input', () => {
    expect(() => calculator.calculate('+', 'abc', 2)).toThrow('Invalid left operand: "abc"');
    expect(() => calculator.calculate('+', 2, 'xyz')).toThrow('Invalid right operand: "xyz"');
  });
});
