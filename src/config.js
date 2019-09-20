const config = {
  aws: {
    dynamodb: {
      region: process.env.AWS_REGION_CODE,
    },
  },
  debug: !!process.env.DEBUG,
  offline: process.env.IS_OFFLINE,
};

if (config.offline) {
  config.aws.dynamodb.endpoint = 'http://localhost:8000';
}

module.exports = config;
