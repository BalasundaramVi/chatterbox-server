/*************************************************************

You should implement your request handler function in this file.

requestHandler is already getting passed to http.createServer()
in basic-server.js, but it won't work as is.

You'll have to figure out a way to export this function from
this file and include it in basic-server.js so that it actually works.

*Hint* Check out the node module documentation at http://nodejs.org/api/modules.html.

**************************************************************/
var defaultCorsHeaders = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10 // Seconds.
};

var fs = require('fs');


var data = require('./data.js');
var getHandler = require('./httpMethodHandlers/GET-handler.js');
var postHandler = require('./httpMethodHandlers/POST-handler.js');
var optionsHandler = require('./httpMethodHandlers/OPTIONS-handler.js');
var errorHandler = require('./httpMethodHandlers/ERROR-handler.js');


var requestHandler = function(request, response) {
  console.log(
    'Serving request type ' + request.method + ' for url ' + request.url
  );

  // The outgoing status.
  if (request.method === 'OPTIONS') {
    optionsHandler(request, response);
  } else if (request.url !== '/classes/messages') {
    errorHandler(request, response);
  } else if (request.method === 'GET') {
    getHandler(request, response);
  } else if (request.method === 'POST') {
    postHandler(request, response);
  }
};

module.exports = requestHandler;
// These headers will allow Cross-Origin Resource Sharing (CORS).
// This code allows this server to talk to websites that
// are on different domains, for instance, your chat client.
//
// Your chat client is running from a url like file://your/chat/client/index.html,
// which is considered a different domain.
//
// Another way to get around this restriction is to serve you chat
// client from this domain by setting up static file serving.
