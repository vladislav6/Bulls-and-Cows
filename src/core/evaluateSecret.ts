import type { bullsAndCows } from "../type/types";

export function evaluateSecret(secret: string, guess: string): bullsAndCows {
 return [...guess]
  .reduce((acc) => {
    return acc;
  }, {bulls: 0, cows: 0});
}