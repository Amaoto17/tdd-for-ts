import { Expression } from './expression';
import { Sum } from './sum';
import { Bank } from './bank';

export class Money implements Expression {
  constructor(protected _amount: number, protected _currency: string) {}

  get amount(): number {
    return this._amount;
  }

  get currency(): string {
    return this._currency;
  }

  times(multiplier: number): Money {
    return new Money(this.amount * multiplier, this.currency);
  }

  plus(addend: Money): Expression {
    return new Sum(this, addend);
  }

  reduce(bank: Bank, to: string): Money {
    let rate = bank.rate(this.currency, to);
    return new Money(this.amount / rate, to);
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
