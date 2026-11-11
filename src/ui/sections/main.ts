import { createMyElement, createRadioButtons, disableLengthInputs } from '../../common/functions.js';
import { startGame } from '../gameControl/startGame.js';

function main(): HTMLElement {
  const main = createMyElement('main');

  const gameSettingsSection = createMyElement('section', 'game-settings');
  const lengthRadioButtons = createRadioButtons(
    'Select length',
    'length',
    ['2', '3', '4', '5', '6'],
    ['2', '3', '4', '5', '6'],
  );
  const baseRadioButtons = createRadioButtons(
    'Select base',
    'base',
    ['2', '8', '10', '16'],
    ['Binary', 'Octal', 'Decimal', 'hexadecimal'],
  );
  const startGameButton = createMyElement('button', '', '', 'Start Game');

  const gameSection = createMyElement('section', 'game-section');
  const gameLogsSection = createMyElement('section', 'logs');

  baseRadioButtons.addEventListener('change', disableLengthInputs);
  startGameButton.addEventListener('click', startGame);

  gameSettingsSection.append(lengthRadioButtons, baseRadioButtons, startGameButton);
  main.append(gameSettingsSection, gameSection, gameLogsSection);
  return main;
}

export default main;
