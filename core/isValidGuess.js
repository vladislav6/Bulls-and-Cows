import { createDigitValidator } from './createDigitValidator.js';
export function isValidGuess(guess, length, base) {
    if (guess.length !== length)
        return false;
    if (new Set(guess).size !== guess.length)
        return false;
    const checkDigit = createDigitValidator(base);
    return [...guess].map((val) => checkDigit(val.toLowerCase())).every((val) => !Number.isNaN(val));
}
