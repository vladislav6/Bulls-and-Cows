import type { bullsAndCows } from "../type/types";

export function evaluateSecret(secret: string, guess: string): bullsAndCows {
 return [...guess]
  .map(char => char.toLowerCase())
  .reduce((acc) => {
    return acc;
  }, {bulls: 0, cows: 0});
}