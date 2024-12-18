const { Pool } = require('pg');
require('dotenv').config();

const host = process.env.HOST;
const user = process.env.user;
const database = process.env.DATABASE;
const password = process.env.PASSWORD;
const port = process.env.DBPORT;

// module.exports = new Pool({
//   host: host,
//   user: user,
//   database: database,
//   password: password,
//   port: port,
// });

module.exports = new Pool({
  connectionString: process.env.CONNECTION_STRING,
});
