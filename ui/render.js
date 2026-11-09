import { cleanDOM } from '../common/functions.js';
import header from './sections/header.js';
import main from './sections/main.js';
function render() {
    const body = document.body;
    const headerElement = header();
    const mainElement = main();
    cleanDOM(body);
    body.prepend(headerElement, mainElement);
}
export default render;
