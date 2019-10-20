import { Dollar } from '../src/money';

test('multiplication', () => {
  let five = new Dollar(5);
  five.times(2);
  expect(five.amount).toBe(10);
});
