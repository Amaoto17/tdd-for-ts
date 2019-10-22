import { Money, Franc } from '../src/money';

test('multiplication', () => {
  let five: Money = Money.dollar(5);
  expect(five.times(2)).toEqual(Money.dollar(10));
  expect(five.times(3)).toEqual(Money.dollar(15));
});

test('equality', () => {
  expect(Money.dollar(5).equals(Money.dollar(5))).toBeTruthy();
  expect(Money.dollar(5).equals(Money.dollar(6))).toBeFalsy();
  expect(Money.franc(5).equals(Money.franc(5))).toBeTruthy();
  expect(Money.franc(5).equals(Money.franc(6))).toBeFalsy();
  expect(Money.dollar(5).equals(Money.franc(5))).toBeFalsy();
});

test('franc multiplication', () => {
  let five: Money = Money.franc(5);
  expect(five.times(2)).toEqual(Money.franc(10));
  expect(five.times(3)).toEqual(Money.franc(15));
});

test('currency', () => {
  expect(Money.dollar(1).currency).toBe("USD");
  expect(Money.franc(1).currency).toBe("CHF");
});

test('different class equality', () => {
  expect(new Franc(10, "CHF")).toEqual(new Money(10, "CHF"));
});
