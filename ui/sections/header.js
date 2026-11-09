import { createMyElement } from '../../common/functions.js';
import newGame from '../gameControl/newGame.js';
import showWinsHistory from './winsHistory.js';
function header() {
    const header = createMyElement('header');
    const newGameButton = createMyElement('button', 'btn', '', 'New Game');
    const timerElement = createMyElement('div', 'timer', '', '00:00');
    const liderBoardElement = createMyElement('button', 'wins-history', '', 'Wins history');
    newGameButton.addEventListener('click', newGame);
    liderBoardElement.addEventListener('click', showWinsHistory);
    header.append(newGameButton, timerElement, liderBoardElement);
    return header;
}
export default header;
