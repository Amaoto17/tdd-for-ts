export class Dollar {
  constructor(private amount: number) {}

  times(multiplier: number): Dollar {
    return new Dollar(this.amount * multiplier);
  }

  equals(object: any): boolean {
    let dollar = object as Dollar;
    return this.amount == dollar.amount;
  }
}

export class Franc {
  constructor(private amount: number) {}

  times(multiplier: number): Franc {
    return new Franc(this.amount * multiplier);
  }

  equals(object: any): boolean {
    let franc = object as Franc;
    return this.amount == franc.amount;
  }
}
