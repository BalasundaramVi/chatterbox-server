var data = require('../data.js');
var _statusCode = 200;
var headers = require('./defaultCorsHeaders');

module.exports = function (request, response) {
  headers['Content-Type'] = 'application/json';
  response.writeHead(_statusCode, headers);
  console.log('OPTIONS HEADERS ', headers);
  response.end(JSON.stringify('Hello World'));
};
