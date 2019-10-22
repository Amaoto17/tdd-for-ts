import { Dollar, Franc } from '../src/money';

test('multiplication', () => {
  let five = new Dollar(5);
  expect(five.times(2)).toStrictEqual(new Dollar(10));
  expect(five.times(3)).toStrictEqual(new Dollar(15));
});

test('equality', () => {
  expect(new Dollar(5).equals(new Dollar(5))).toBeTruthy();
  expect(new Dollar(5).equals(new Dollar(6))).toBeFalsy();
});

test('franc multiplication', () => {
  let five = new Franc(5);
  expect(five.times(2)).toStrictEqual(new Franc(10));
  expect(five.times(3)).toStrictEqual(new Franc(15));
})
