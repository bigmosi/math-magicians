import calculate from '../logic/calculator';

describe('calculate test', () => {
  test('ADD of 2 + 2', () => {
    let result = calculate({}, '2');
    result = calculate(result, '+');
    result = calculate(result, '2');
    result = calculate(result, '=');
    expect(result.total).toBe('4');
  });
  test('Substract of 4 - 2', () => {
    let result = calculate({}, '4');
    result = calculate(result, '-');
    result = calculate(result, '2');
    result = calculate(result, '=');
    expect(result.total).toBe('2');
  });
  test('Multiplication of 3 * 2', () => {
    let result = calculate({}, '3');
    result = calculate(result, 'x');
    result = calculate(result, '2');
    result = calculate(result, '=');
    expect(result.total).toBe('6');
  });
  test('Division of 6 ÷ 2', () => {
    let result = calculate({}, '6');
    result = calculate(result, '÷');
    result = calculate(result, '2');
    result = calculate(result, '=');
    expect(result.total).toBe('3');
  });
});
