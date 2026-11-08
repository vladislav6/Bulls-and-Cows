import { createMyElement } from '../../common/functions.js';
import newGame from '../gameControl/newGame.js';
import showLiderboard from './liderboard.js';

function header(): HTMLElement {
  const header = createMyElement('header');
  const newGameButton = createMyElement('button', 'btn', '', 'New Game');
  const timerElement = createMyElement('div', 'timer', '', '00:00');
  const liderBoardElement = createMyElement('button', 'liderboard', '', 'Liderboard');

  newGameButton.addEventListener('click', newGame);
  liderBoardElement.addEventListener('click', showLiderboard);

  header.append(newGameButton, timerElement, liderBoardElement);
  return header;
}

export default header;
