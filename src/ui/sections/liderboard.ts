import { createMyElement } from '../../common/functions.js';

function showLiderboard(): void {
  const modal = createMyElement('div', 'modal', '', 'liderboard');
  document.body.append(modal);
}

export default showLiderboard;
