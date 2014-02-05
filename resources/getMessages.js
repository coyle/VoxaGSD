var ContextIO = require('contextio'),
helper = require('./helpers.js'),
ctxioClient = new ContextIO.Client(helper.apiKeys),
fs = require('fs'),
helpers = helper.users, 
date = helper.date;
//getMessages = require('./resources/getMessages');
helpers.pop();




exports.getMessage = function(helpers,date) {
    for(helper in helpers) {
        ctxioClient.accounts(helpers[helper]).messages().get({date_after: date},function (err, response) {
        if (err) throw err;
        if (response.body!=[]){
            var socket = require('socket.io-client').connect('http://localhost:8080'); 
            socket.on('news', function (data) {
                socket.emit('my other event', response.body);
            });
        
            socket.on('disconnect',function() {
                socket.disconnect(true);
            });
        }
    });
}

// Set time to last run 
fs.writeFile('./resources/date.txt', Math.round((new Date()).getTime()/1000), function(err) {
    if(err) {
        console.log(err);
    } else {
        console.log('success');
    }
})

};


