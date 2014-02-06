var 
ContextIO   = require('contextio'),
helper      = require('./helpers.js'),
ctxioClient = new ContextIO.Client(helper.apiKeys),
fs          = require('fs'),
helpers     = helper.users, 
time        = helper.date,
socket      = require('socket.io-client'),
connection;
helpers.pop();




exports.getMessage = function( helpers, time, host, date ) {
    for(helper in helpers) {
        // takes id of email account and gets all messages sent after 'date' 
        ctxioClient.accounts(helpers[helper]).messages().get({date_after: time},function (err, response) {
            if (err) throw err;
            
            // connects to socket
            connection = connect(socket, host);
            
            // After connected, emit messages to listeners
            connection.on('news', function (data) {
                connection.emit('my other event', response.body);
            });
            
            // disconnect from socket
            connection.on('disconnect',function() {
                connection.disconnect(true);
            });
        });
    }
    
    // Write time of last check
    write_date(date);
};

// function that sets time of last email check
write_date = function(file) {
    fs.writeFile(file, Math.round((new Date()).getTime()/1000), function(err) {
        if(err) {
            console.log(err);
        } else {
            console.log('success');
        }
    });
}

// function that connects to socket
connect = function(socket, host) {
    var socket_connection = socket.connect(host);
    return socket_connection;
    }
