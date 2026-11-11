import render from '../render.js';
import { intervalId } from './startGame.js';
import gameStorage from '../data/storage.js';

function newGame(): void {
  render();
  gameStorage.history = [];
  clearInterval(intervalId);
}

export default newGame;
