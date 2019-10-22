export abstract class Money {
  constructor(protected amount: number, protected _currency: string) {}

  abstract times(multiplier: number): Money;

  get currency(): string {
    return this._currency;
  }

  equals(object: any): boolean {
    let money = object as Money;
    return this.amount == money.amount && this.constructor == money.constructor;
  }

  static dollar(amount: number): Money {
    return new Dollar(amount, "USD");
  }

  static franc(amount: number): Money {
    return new Franc(amount, "CHF");
  }
}

export class Dollar extends Money {
  constructor(amount: number, _currency: string) {
    super(amount, _currency);
  }

  times(multiplier: number): Money {
    return Money.dollar(this.amount * multiplier);
  }
}

export class Franc extends Money {
  constructor(amount: number, _currency: string) {
    super(amount, _currency);
  }

  times(multiplier: number): Money {
    return Money.franc(this.amount * multiplier);
  }
}
