var 
ContextIO   = require('contextio'),
helper      = require('./resources/helpers.js'),
ctxioClient = new ContextIO.Client(helper.apiKeys),
fs          = require('fs'),
helpers     = helper.users, 
date        = helper.date,
getMessages = require('./resources/getMessages');
socket      = require('socket.io-client');
helpers.pop();


getMessages.getMessage(helpers, date, 'http://localhost:8080', './resources/date.txt' );
