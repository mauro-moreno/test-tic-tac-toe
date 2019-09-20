const gameDb = require('../db/games');

const games = {

  getAll: () => gameDb.getAll(),

};

module.exports = games;
