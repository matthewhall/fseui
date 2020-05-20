const yargs = require('yargs');
const server = require('./server.js');

const { argv } = yargs
  .option('p', {
    alias: 'port',
    describe: 'Firestore emulator UI port.',
    type: 'number',
    default: 9000
  })
  .help('h').alias('h', 'help');

server({ port: argv.port });
