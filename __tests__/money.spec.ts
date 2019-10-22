import { Money } from '../src/money';
import { Bank } from '../src/bank';

test('multiplication', () => {
  let five = Money.dollar(5);
  expect(five.times(2)).toEqual(Money.dollar(10));
  expect(five.times(3)).toEqual(Money.dollar(15));
});

test('equality', () => {
  expect(Money.dollar(5).equals(Money.dollar(5))).toBeTruthy();
  expect(Money.dollar(5).equals(Money.dollar(6))).toBeFalsy();
  expect(Money.dollar(5).equals(Money.franc(5))).toBeFalsy();
});

test('currency', () => {
  expect(Money.dollar(1).currency).toBe("USD");
  expect(Money.franc(1).currency).toBe("CHF");
});

test('simple addition', () => {
  let five = Money.dollar(5);
  let sum = five.plus(five);
  let bank = new Bank();
  let reduced = bank.reduce(sum, "USD");
  expect(reduced).toEqual(Money.dollar(10));
})
