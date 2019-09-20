const { getAll: gamesGetAll } = require('../../services/games');

module.exports.handler = async () => {
  const activeGames = await gamesGetAll();
  return { statusCode: 200, data: Array.isArray(activeGames) ? activeGames : [] };
};
