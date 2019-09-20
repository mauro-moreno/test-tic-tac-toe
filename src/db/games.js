/* eslint import/no-extraneous-dependencies: "off" */
const { DynamoDB } = require('aws-sdk');
const NestedError = require('nested-error-stacks');
const dynamoDbConfig = require('../config').aws.dynamodb;
const TicTacToe = require('../models/tic-tac-toe');

const dynamoDB = new DynamoDB(dynamoDbConfig);
const documentClient = new DynamoDB.DocumentClient({ service: dynamoDB });

const games = {

  getAll: async () => {
    try {
      const params = {
        TableName: 'games',
        FilterExpression: 'gameOver = :gameOver',
        ExpressionAttributeValues: {
          ':gameOver': false,
        },
        ProjectionExpression: 'id',
      };
      const result = await documentClient.scan(params).promise();
      return result.Items;
    } catch (err) {
      throw new NestedError('Error while getting all games', err);
    }
  },

  create: async (initialGame) => {
    try {
      const params = {
        TableName: 'games',
        Item: initialGame,
      };
      await documentClient.put(params).promise();
      return initialGame;
    } catch (err) {
      throw new NestedError('Error while creating new game', err);
    }
  },

  findById: async (gameId) => {
    try {
      const params = {
        TableName: 'games',
        Key: {
          id: gameId,
        },
      };
      const gameData = (await documentClient.get(params).promise()).Item;
      return new TicTacToe(gameData);
    } catch (err) {
      throw new NestedError(`Error while getting game ${gameId}`, err);
    }
  },

};

module.exports = games;
