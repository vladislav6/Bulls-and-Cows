import { createMyElement } from '../../common/functions.js';
import gameStorage from '../data/storage.js';
function showWinsHistory() {
    const modal = createMyElement('div', 'modal');
    const closeModal = createMyElement('button');
    closeModal.type = 'button';
    closeModal.textContent = 'Close modal';
    const fragment = document.createDocumentFragment();
    [...gameStorage.wins]
        .sort((a, b) => a.steps - b.steps)
        .forEach((win, id) => {
        const winRecord = `${id + 1}. ` + JSON.stringify(win).replaceAll(/[{}"]/g, ' ');
        const winElement = createMyElement('p', '', '', winRecord);
        fragment.append(winElement);
    });
    closeModal.addEventListener('click', () => modal.remove());
    modal.prepend(closeModal);
    modal.append(gameStorage.wins.length > 0 ? fragment : 'Empty');
    document.body.append(modal);
}
export default showWinsHistory;
