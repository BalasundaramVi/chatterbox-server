var data = require('../data.js');
var _statusCode = 201;
var headers = require('./defaultCorsHeaders');

var idCount = 0;

module.exports = function post(request, response) {
  request.on('data', chunk => {
    var message = JSON.parse(chunk.toString());
    message['objectId'] = idCount++;
    data.results.push(message);
    console.log("ADDED TO DATA: ", data);
  });
  headers['Content-Type'] = 'application/json';
  response.writeHead(_statusCode, headers);
  response.end(JSON.stringify(data));
};
