const uuid = require('uuid');
const gameDb = require('../db/games');

const PLAYERS_SYMBOLS = ['X', 'O'];

const defaultGame = {
  id: uuid.v4(),
  grid: [
    ['-', '-', '-'],
    ['-', '-', '-'],
    ['-', '-', '-'],
  ],
  lastPlayer: PLAYERS_SYMBOLS[1],
  gameOver: false,
};

const games = {

  getAll: () => gameDb.getAll(),

  create: () => gameDb.create(defaultGame),

  findById: (gameId) => gameDb.findById(gameId),

  move: async (gameId, playerSymbol, coordinates) => {
    const game = await games.findById(gameId);
    game.move(playerSymbol, coordinates);
    return gameDb.updateGame(game);
  },

};

module.exports = games;
