import { Money } from './money';
import { Expression } from './expression';

export class Sum implements Expression {
  constructor(public augend: Money, public addend: Money) {}

  reduce(to: string): Money {
    let amount = this.augend.amount + this.addend.amount;
    return new Money(amount, to);
  }
}
