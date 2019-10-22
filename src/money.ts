export class Money {
  constructor(protected amount: number, protected _currency: string) {}

  get currency(): string {
    return this._currency;
  }

  times(multiplier: number): Money {
    return new Money(this.amount * multiplier, this.currency);
  }

  equals(object: any): boolean {
    let money = object as Money;
    return this.amount === money.amount && this.currency === money.currency;
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
}

export class Franc extends Money {
  constructor(amount: number, _currency: string) {
    super(amount, _currency);
  }
}
