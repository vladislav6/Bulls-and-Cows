import render from '../render.js';
import { intervalId } from './startGame.js';

function newGame(): void {
  render();
  clearInterval(intervalId);
}

export default newGame;
