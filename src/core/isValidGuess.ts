export function isValidGuess(guess: string, length: number, base: number): boolean {
  if (guess.length !== length) return false;
  
  if (guess || base) return true;
  return true;
}