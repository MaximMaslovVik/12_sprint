const router = require('express').Router();
const users = require('.././data/users.json');
const fs = require('fs');
/*
const reader = fs.createReadStream('./in.txt', { encoding: 'utf8' });
const writer = fs.createWriteStream('./out.txt', { encoding: 'utf8' });

reader.pipe(writer);
*/
router.get('/users/:id', (req, res) => {
  const { id } = req.params;
  if (!users[id]) {
      res.statusCode = 404;
      res.statusMessage = 'Error';
      res.send({ "message": "Нет пользователя с таким id" });
      return;
  }
  res.send(users[id]);
});

module.exports = router;