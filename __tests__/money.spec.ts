import { Money } from '../src/money';
import { Bank } from '../src/bank';
import { Sum } from '../src/sum';

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
});

test('plus returns sum', () => {
  let five = Money.dollar(5);
  let result = five.plus(five);
  let sum = result as Sum;
  expect(sum.augend).toEqual(five);
  expect(sum.addend).toEqual(five);
});

test('reduce sum', () => {
  let sum = new Sum(Money.dollar(3), Money.dollar(4));
  let bank = new Bank();
  let result = bank.reduce(sum, "USD");
  expect(result).toEqual(Money.dollar(7));
});

test('reduce money', () => {
  let bank = new Bank();
  let result = bank.reduce(Money.dollar(1), "USD");
  expect(result).toEqual(Money.dollar(1));
});

test('reduce money different currency', () => {
  let bank = new Bank();
  bank.addRate("CHF", "USD", 2);
  let result = bank.reduce(Money.franc(2), "USD");
  expect(result).toEqual(Money.dollar(1));
});

test('lookup rate', () => {
  let bank = new Bank();
  bank.addRate("CHF", "USD", 2);
  expect(bank.rate("CHF", "USD")).toBe(2);
});

test('identity rate', () => {
  expect(new Bank().rate("USD", "USD")).toBe(1);
})
