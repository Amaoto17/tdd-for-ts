import { Money } from './money';
import { Expression } from './expression';
import { Bank } from './bank';

export class Sum implements Expression {
  constructor(public augend: Expression, public addend: Expression) {}

  times(multiplier: number): Expression {
    return new Sum(this.augend.times(multiplier), this.addend.times(multiplier));
  }

  plus(addend: Expression): Expression {
    return new Sum(this, addend);
  }

  reduce(bank: Bank, to: string): Money {
    let amount = this.augend.reduce(bank, to).amount + this.addend.reduce(bank, to).amount;
    return new Money(amount, to);
  }
}
