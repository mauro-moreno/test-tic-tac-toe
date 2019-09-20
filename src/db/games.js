/* eslint import/no-extraneous-dependencies: "off" */
const { DynamoDB } = require('aws-sdk');
const NestedError = require('nested-error-stacks');
const dynamoDbConfig = require('../config').aws.dynamodb;

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

};

module.exports = games;
