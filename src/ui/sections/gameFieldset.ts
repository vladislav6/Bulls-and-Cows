import { createMyElement } from '../../common/functions.js';
import { countPossibleSecrets } from '../../core/countPossibleSecrets.js';
import { evaluateSecret } from '../../core/evaluateSecret.js';
import { isValidGuess } from '../../core/isValidGuess.js';
import type { gameOptions } from '../../type/types';

function createGameFieldset(gameOptions: gameOptions): HTMLElement {
  const { length, base, secret } = gameOptions;

  const possibleSecretNumbers = countPossibleSecrets(length, base);

  const gameFieldset = createMyElement('fieldset');
  const fieldsetLegend = createMyElement('legend', '', '', 'Enter your guess number');
  const possibleNumbersField = createMyElement('p', 'possible-numbers');
  possibleNumbersField.textContent = `Possible numbers variations count: ${possibleSecretNumbers}`;
  const gameGuessInput = createMyElement('input') as HTMLInputElement;
  gameGuessInput.type = 'text';
  const gameCheckButton = createMyElement('button') as HTMLButtonElement;
  gameCheckButton.type = 'button';
  gameCheckButton.textContent = 'Check guess';
  const errorGuess = createMyElement('p', 'error-guess');

  gameCheckButton.addEventListener('click', () => {
    const guess = gameGuessInput.value;
    if (!isValidGuess(guess, length, base)) {
      errorGuess.textContent = 'Error!!! Guess number is invalid';
      gameFieldset.append(errorGuess);
    } else {
      if (!secret) return;
      const evaluateResult = evaluateSecret(secret, guess);
      errorGuess.textContent = JSON.stringify(evaluateResult);
    }
  });

  gameFieldset.append(fieldsetLegend, possibleNumbersField, gameGuessInput, gameCheckButton);
  return gameFieldset;
}

export default createGameFieldset;
