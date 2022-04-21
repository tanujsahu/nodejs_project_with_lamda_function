module.exports = (err, data) => {
  let response = {
    statusCode: 200, message: 'Success',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': false,
    },
    body: {}
  };
  if (err) {
    response.message = 'failed';
    response.body = {},
      response.statusCode = 500;
    return response;
  } else {
    response.message = 'success';
    response.body = JSON.stringify(data),
      response.statusCode = 200;
    return response;
  }

}