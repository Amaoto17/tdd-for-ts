import { Money } from "./money";
import { Bank } from "./bank";

export interface Expression {
  times(multiplier: number): Expression;
  plus(addend: Expression): Expression;
  reduce(bank: Bank, to: string): Money;
}
