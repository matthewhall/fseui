const http = require('http');
const app = require('./app.js');

module.exports = (options) => {
  const server = http.createServer(app(options));

  server.listen(options.port);
  server.on('listening', () => {
    console.log(`Emulator UI running at: http://localhost:${options.port}/`);
  });
}
