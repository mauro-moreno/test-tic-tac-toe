const { create: gameCreate } = require('../../services/games');

module.exports.handler = async () => {
  const newGame = await gameCreate();
  return {
    statusCode: 201,
    data: newGame,
  };
};
