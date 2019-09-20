const NestedError = require('nested-error-stacks');
const { findById: gamesFindById } = require('../../services/games');

module.exports.handler = async (event) => {
  const { gameId } = event.path;
  const game = await gamesFindById(gameId);
  if (game) {
    return {
      statusCode: 200,
      data: game,
    };
  }
  throw NestedError(`Game not found: ${gameId}`);

};
