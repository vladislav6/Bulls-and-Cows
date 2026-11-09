import { createMyElement } from '../../common/functions.js';
import { countPossibleSecrets } from '../../core/countPossibleSecrets.js';
import { evaluateSecret } from '../../core/evaluateSecret.js';
import { isValidGuess } from '../../core/isValidGuess.js';
import { createDigitValidator } from '../../core/createDigitValidator.js';
import gameStorage from '../data/storage.js';
import logs from './logs.js';
import endOfGame from '../gameControl/endOfGame.js';
function createGameFieldset(gameOptions) {
    const { length, base, secret } = gameOptions;
    const possibleSecretNumbers = countPossibleSecrets(length, base);
    const gameFieldset = createMyElement('fieldset');
    const legend = `Enter your guess number with length ${length} in ${base} base. All chars must be unique`;
    const fieldsetLegend = createMyElement('legend', '', '', legend);
    const possibleNumbersField = createMyElement('p', 'possible-numbers');
    possibleNumbersField.textContent = `Possible numbers variations count: ${possibleSecretNumbers}`;
    const gameGuessInput = createMyElement('input');
    gameGuessInput.type = 'text';
    const gameCheckButton = createMyElement('button');
    gameCheckButton.type = 'button';
    gameCheckButton.textContent = 'Check guess';
    const errorGuess = createMyElement('p', 'error-guess');
    const validChar = createDigitValidator(base);
    gameGuessInput.addEventListener('input', (event) => {
        const char = event.data;
        if (!char)
            return;
        const validatedChar = validChar(char);
        const uniqueChars = new Set(gameGuessInput.value);
        if (isNaN(validatedChar) || gameGuessInput.value.length > length) {
            gameGuessInput.value = gameGuessInput.value.replace(`${char}`, '');
        }
        else {
            gameGuessInput.value = [...uniqueChars.values()].join('').toLowerCase();
        }
    });
    gameCheckButton.addEventListener('click', () => {
        const guess = gameGuessInput.value;
        if (!isValidGuess(guess, length, base)) {
            errorGuess.textContent = 'Error!!! Guess number is invalid';
            gameFieldset.append(errorGuess);
        }
        else {
            if (!secret)
                return;
            errorGuess.remove();
            if (gameStorage.history.find((move) => move.guess === guess))
                return;
            const evaluateResult = evaluateSecret(secret, guess);
            gameStorage.history = [...gameStorage.history, { guess, result: evaluateResult }];
            logs();
            if (evaluateResult.bulls === length) {
                gameFieldset.inert = true;
                endOfGame({ length, base, secret });
            }
        }
    });
    gameFieldset.append(fieldsetLegend, possibleNumbersField, gameGuessInput, gameCheckButton);
    return gameFieldset;
}
export default createGameFieldset;
