import { Expression } from './expression';
import { Bank } from './bank';

export class Money implements Expression {
  constructor(protected amount: number, protected _currency: string) {}

  get currency(): string {
    return this._currency;
  }

  times(multiplier: number): Money {
    return new Money(this.amount * multiplier, this.currency);
  }

  plus(addend: Money): Expression {
    return new Money(this.amount + addend.amount, this.currency);
  }

  equals(object: any): boolean {
    let money = object as Money;
    return this.amount === money.amount && this.currency === money.currency;
  }

  static dollar(amount: number): Money {
    return new Money(amount, "USD");
  }

  static franc(amount: number): Money {
    return new Money(amount, "CHF");
  }
}
