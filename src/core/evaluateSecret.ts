import type { bullsAndCows } from "../type/types";

export function evaluateSecret(secret: string, guess: string): bullsAndCows {
 return [...guess]
  .map(char => char.toLowerCase())
  .reduce((acc, char, id, chars) => {
    if (char === secret[id]) {
        acc.bulls += 1;
    }
    if (secret[id] && chars.includes(secret[id])) {
        acc.cows += 1;
    }
    return acc;
  }, {bulls: 0, cows: 0});
}