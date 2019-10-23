import { Expression } from './expression';
import { Money } from './money';
import { Pair } from './pair';

export class Bank {
  private rates = new Map<number, number>();

  reduce(source: Expression, to: string): Money {
    return source.reduce(this, to);
  }

  addRate(from: string, to: string, rate: number) {
    this.rates.set(new Pair(from, to).hashCode(), rate);
  }

  rate(from: string, to: string): number {
    if (from === to) return 1;
    let rate = this.rates.get(new Pair(from, to).hashCode());
    if (!rate) return 0;
    return rate;
  }
}
