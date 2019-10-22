import { Money, Franc } from '../src/money';

test('multiplication', () => {
  let five: Money = Money.dollar(5);
  expect(five.times(2)).toStrictEqual(Money.dollar(10));
  expect(five.times(3)).toStrictEqual(Money.dollar(15));
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
  expect(five.times(2)).toStrictEqual(Money.franc(10));
  expect(five.times(3)).toStrictEqual(Money.franc(15));
});
