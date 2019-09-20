const { move: gamesMove } = require('../../../services/games');

module.exports.handler = async (event) => {
  const { path: { gameId }, body: { playerSymbol, coordinates } } = event;
  const result = await gamesMove(gameId, playerSymbol, coordinates);
  return {
    statusCode: 200,
    data: result,
  };
};
