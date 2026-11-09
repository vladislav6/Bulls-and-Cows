import { createMyElement } from '../../common/functions.js';
import gameStorage from '../data/storage.js';
import { intervalId } from './startGame.js';
function endOfGame(winsOptions) {
    const { length, base, secret } = winsOptions;
    clearInterval(intervalId);
    const endOfGameElement = createMyElement('p', 'win-game');
    const gameTimeElemnt = document.querySelector('.timer');
    const gameSection = document.querySelector('.game-section');
    if (!gameSection || !gameTimeElemnt || !secret)
        return;
    const steps = gameStorage.history.length;
    const gameTime = gameTimeElemnt.textContent;
    gameStorage.wins = [...gameStorage.wins, { steps, time: gameTime, length, base, secret }];
    window.localStorage.setItem('bullsAndCowsWins', JSON.stringify(gameStorage.wins));
    endOfGameElement.textContent = `You guess secret "${secret}" - in ${base} base with length ${length} by ${steps} steps and ${gameTime} times.`;
    gameSection.after(endOfGameElement);
}
export default endOfGame;
