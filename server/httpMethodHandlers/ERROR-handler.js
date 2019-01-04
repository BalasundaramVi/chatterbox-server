var _statusCode = 404;
var headers = require('./defaultCorsHeaders');

module.exports = function post(request, response) {
  headers['Content-Type'] = 'application/json';
  response.writeHead(_statusCode, headers);
  response.end();
};
