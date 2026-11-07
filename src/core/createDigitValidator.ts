export function createDigitValidator(base: number): (char: string) => number {
  return (char: string) => {
    if (!base || !char) {
      return 0;
    }
    return parseInt(char, 2);
  }
}