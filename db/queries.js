const pool = require('./pool');

async function getAllUsernames() {
  const { rows } = await pool.query('SELECT * FROM usernames');
  return rows;
}

async function getSearchedUsernames(searchTerm) {
  const { rows } = await pool.query(
    'SELECT * FROM usernames WHERE username LIKE $1',
    ['%' + searchTerm + '%']
  );
  return rows;
}

async function insertUsername(username) {
  await pool.query('INSERT INTO usernames (username) VALUES ($1)', [username]);
}

async function getDeleteUsernames() {
  await pool.query('DELETE FROM usernames');
}

module.exports = {
  getAllUsernames,
  insertUsername,
  getSearchedUsernames,
  getDeleteUsernames,
};
