module.exports.handler = async (event) => ({
  statusCode: 200,
  body: JSON.stringify(
    {
      message: 'Games list',
      input: event,
    },
    null,
    2,
  ),
});
