export function isValidGuess(guess: string, length: number, base: number): boolean {
  if (guess.length !== length) return false;
  if (new Set(guess).size !== guess.length) return false;

  if (base) return false;
  return false;
}