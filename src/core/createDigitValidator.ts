export function createDigitValidator(base: number): (char: string) => number {
  return (char: string) => {
    return parseInt(char, base);
  }
}