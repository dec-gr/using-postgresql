const db = require('../db/queries');

exports.usersListGet = async (req, res) => {
  const searchTerm = req.query.search;
  if (searchTerm) {
    const filteredUsernames = await db.getSearchedUsernames(searchTerm);
    res.send(
      'Usernames: ' + filteredUsernames.map((user) => user.username).join(', ')
    );
  } else {
    console.log(searchTerm);
    const usernames = await db.getAllUsernames();
    console.log('Usernames: ', usernames);
    res.send('Usernames: ' + usernames.map((user) => user.username).join(', '));
  }
};

exports.usersNewGet = (req, res) => {
  res.render('createUser', { title: 'Create User' });
};

exports.usersNewPost = async (req, res) => {
  db.insertUsername(req.body.username);
  res.redirect('/');
};

exports.usersDeleteGet = async (req, res) => {
  db.getDeleteUsernames();
  res.redirect('/');
};
