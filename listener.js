var io = require('socket.io').listen(8080);

io.sockets.on('connection', function (socket) {
  socket.emit('news', { message: 'recieved' });
  socket.on('my other event', function (data) {
    console.log(data);
    socket.emit('disconnect');
  });
});
