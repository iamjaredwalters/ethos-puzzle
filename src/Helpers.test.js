import someFn from './Helpers.js';
import singleDigits from './HappyNum.js';

it('returns 4', () => {
  const result = singleDigits(2);

  expect(result).toEqual(4);
});

it('returns 2', () => {
  const result = someFn(2);

  expect(result).toEqual(2);
});

it('handles undefined', () => {
  const result = someFn();

  expect(result).toEqual(0);
});