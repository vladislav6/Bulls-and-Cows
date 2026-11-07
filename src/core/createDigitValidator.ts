export function createDigitValidator(base: number): (char: string) => number {
  return (char: string) => {
    if (base === 2 && char === '2' || base === 8 && char === '8') {
      return NaN;
    }
    return parseInt(char, 10);
  }
}