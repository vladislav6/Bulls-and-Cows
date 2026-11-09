import gameStorage from '../data/storage.js';
import { cleanDOM, createMyElement } from '../../common/functions.js';
function logs() {
    const gameLogsSection = document.querySelector('.logs');
    if (!gameLogsSection)
        return;
    cleanDOM(gameLogsSection);
    gameStorage.history.reverse().forEach((step, id, arr) => {
        const historyRecord = `${arr.length - id}. ` + JSON.stringify(step).replaceAll(/[{}":]/g, ' ');
        const move = createMyElement('p', '', '', historyRecord);
        gameLogsSection.append(move);
    });
    return gameLogsSection;
}
export default logs;
