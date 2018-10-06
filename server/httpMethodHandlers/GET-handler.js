var data = require('../data.js');
var _statusCode = 200;
var headers = require('./defaultCorsHeaders');

module.exports = function get(request) {
  headers['Content-Type'] = 'application/json';
  response.writeHead(_statusCode, headers);
  response.end(JSON.stringify(data.results));
};
