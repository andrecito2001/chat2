const { FRONTEND_URL, PORT } = require('./config.js');

const http = require('http');
const server = http.createServer();
const io = require('socket.io')(server, {
  cors: {
    origin: FRONTEND_URL, 
    methods: ["GET", "POST"]
  }
});

io.on('connection', (socket) => {
  console.log('Cliente conectado');

  socket.on('message', (message) => {
    console.log(`Mensaje recibido: ${message}`);
    io.emit('message', message); 
  });

  socket.on('disconnect', () => {
    console.log('Cliente desconectado');
  });
});

server.listen(PORT, () => {
  console.log(`Servidor escuchando en ${PORT}`);
});

