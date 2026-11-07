export function createDigitValidator(base: number): (char: string) => number {
  return (char: string) => {
    if (base === 2 && char === '2') {
      return NaN;
    }
    return parseInt(char, 8);
  }
}