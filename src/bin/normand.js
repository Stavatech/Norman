#!/usr/bin/env node

/**
 * Module dependencies.
 */
var config = require('../config/config');
var debug = require('debug')('web:server');
var http = require('http');

var argv = require('minimist')(process.argv.slice(2));

/**
 * Get app and config depending on launch mode
 */
var path = '../';

switch (argv.mode) {
    case 'master': {
        path += 'service/master/service';
    } 
    case 'worker': {
        path += 'service/worker/service';
    }
    case 'web': {
        path += 'service/web/service';
    }
    default: {
        console.log('Invalid launch mode');
        process.exit(1);
    }
}

var app = require(path);
var appConfig = config[argv.mode];

/**
 * Get port from environment and store in Express.
 */
var port = normalizePort(appConfig.port);
app.set('port', port);

/**
 * Create HTTP server.
 */
var server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 */
function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */
function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */
function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}
