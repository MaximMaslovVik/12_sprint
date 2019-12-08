const router = require('express').Router();
const users = require('.././data/users.json');

router.get('/users', (req, res) => {
  res.send(users);
});

router.get('/users/:id', (req, res) => {
  const { id } = req.params;
  if (!users[id]) {
      res.statusCode = 404;
      res.statusMessage = 'Error';
      res.send({ error: 'Такого пользователя нет' });
      return;
  }
  res.send(users[id]);
});

module.exports = router;