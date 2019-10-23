export class Pair {
  constructor(private from: string, private to: string) {}

  equals(object: any): boolean {
    let pair = object as Pair;
    return this.from === pair.from && this.to === pair.to;
  }

  hashCode(): number {
    return 0;
  }
}
