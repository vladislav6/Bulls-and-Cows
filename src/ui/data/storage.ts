import type { storage, winsType } from '../../type/types';

const bullsAndCowsWins: string | null = localStorage.getItem('bullsAndCowsWins');
let wins: winsType[] = [];
if (bullsAndCowsWins) {
  wins = JSON.parse(bullsAndCowsWins);
}

const gameStorage: storage = {
  history: [],
  wins,
};

export default gameStorage;
