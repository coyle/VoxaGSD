var  fs = require('fs'),
     path = require('path');
 
exports.apiKeys = JSON.parse(fs.readFileSync(path.join(__dirname, 'keys.json')).toString());
exports.users = fs.readFileSync(path.join(__dirname, 'users.txt')).toString().split('\n');
exports.date =  fs.readFileSync(path.join(__dirname, 'date.txt')).toString().replace(/ /g,'');


//console.log(JSON.parse(fs.readFileSync(path.join(__dirname, 'users.json'))).toString());
