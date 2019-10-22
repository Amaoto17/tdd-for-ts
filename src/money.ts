class Money {
  constructor(protected amount: number) {}

  equals(object: any): boolean {
    let money = object as Money;
    return this.amount == money.amount;
  }
}

export class Dollar extends Money {
  constructor(amount: number) { super(amount); }

  times(multiplier: number): Dollar {
    return new Dollar(this.amount * multiplier);
  }
}

export class Franc extends Money {
  constructor(amount: number) { super(amount); }

  times(multiplier: number): Franc {
    return new Franc(this.amount * multiplier);
  }
}
