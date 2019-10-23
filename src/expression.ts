import { Money } from "./money";
import { Bank } from "./bank";

export interface Expression {
  reduce(bank: Bank, to: string): Money;
}
