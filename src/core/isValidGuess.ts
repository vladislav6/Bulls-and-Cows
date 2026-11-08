import { createDigitValidator } from './createDigitValidator.js';

export function isValidGuess(guess: string, length: number, base: number): boolean {
  if (guess.length !== length) return false;
  if (new Set(guess).size !== guess.length) return false;

  const checkDigit = createDigitValidator(base);

  return [...guess].map((val) => checkDigit(val.toLowerCase())).every((val) => !Number.isNaN(val));
}
