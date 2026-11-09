const bullsAndCowsWins = localStorage.getItem('bullsAndCowsWins');
let wins = [];
if (bullsAndCowsWins) {
    wins = JSON.parse(bullsAndCowsWins);
}
const gameStorage = {
    history: [],
    wins,
};
export default gameStorage;
