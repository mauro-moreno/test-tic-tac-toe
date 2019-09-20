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

};

module.exports = games;
