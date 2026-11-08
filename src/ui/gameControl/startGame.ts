import { cleanDOM, timer } from '../../common/functions.js';
import { generateSecret } from '../../core/generateSecret.js';
import createGameFieldset from '../sections/gameFieldset.js';

let intervalId: number = 0;

function startGame(): void {
  const length = document.querySelector('input[name="length"]:checked') as HTMLInputElement;
  const base = document.querySelector('input[name="base"]:checked') as HTMLInputElement;
  const gameSettings = document.querySelector('.game-settings') as HTMLElement;
  const gameSection = document.querySelector('.game-section') as HTMLElement;
  const timerElement = document.querySelector('.timer') as HTMLElement;

  if (!length || !base || !gameSection || !gameSettings) return;

  const lengthValue = Number(length.value);
  const baseValue = Number(base.value);
  const secretNumber = generateSecret(lengthValue, baseValue);

  if (!secretNumber) {
    gameSection.textContent =
      'Error!!! Select other base or length shuold be two. You can play in binary only if the length is two.';
  } else {
    cleanDOM(gameSection);
    gameSettings.inert = true;
    const timerUpdate = timer(timerElement);
    intervalId = setInterval(timerUpdate, 1000);
    const gameOptions = {
      length: lengthValue,
      base: baseValue,
      secret: secretNumber,
    };

    const gameFieldset = createGameFieldset(gameOptions);
    gameSection.append(gameFieldset);
  }
}

export { startGame, intervalId };
