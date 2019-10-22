export class Dollar {
  constructor(public amount: number) {}

  times(multiplier: number): Dollar {
    return new Dollar(this.amount * multiplier);
  }

  equals(object: any): boolean {
    let dollar = object as Dollar;
    return this.amount == dollar.amount;
  }
}
