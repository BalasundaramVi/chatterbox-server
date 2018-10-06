var data = require('../data.js');
var _statusCode = 201;
var headers = require('./defaultCorsHeaders');

module.exports = function post(request, response) {
  request.on('data', chunk => {
    data.results.push(JSON.parse(chunk.toString()));
  });
  headers['Content-Type'] = 'application/json';
  response.writeHead(_statusCode, headers);
  response.end();
};
