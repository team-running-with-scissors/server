const DATABASE_URL = 'postgres://localhost:5432/<your-database>';
// windows and linux
const DATABASE_URL = 'postgres://user:password@localhost:5432/<your-database>';
const pg = require('pg');
const Client = pg.Client;

const client = new Client(DATABASE_URL);
client.connect()
  .then(() => console.log('connected to db', DATABASE_URL))
  .catch(err => console.error('connection error', err));

client.on('error', err => {
  console.error('\n**** DATABASE ERROR ****\n\n', err);
});

module.exports = client;