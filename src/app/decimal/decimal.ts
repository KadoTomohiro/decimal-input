
export interface Decimal {
  integerPart: number
  decimalPart:  number
}

export class Decimal {
  static isDecimal(value: unknown): value is Decimal {
    return typeof value === 'object' &&
      value !== null &&
      'integerPart' in value &&
      'decimalPart' in value
  }

  constructor(initialValue: Decimal) {
    this.decimalPart = initialValue.decimalPart
    this.integerPart = initialValue.integerPart
  }

  toString(): string {
    return `${this.integerPart}.${this.decimalPart}`
  }
}
