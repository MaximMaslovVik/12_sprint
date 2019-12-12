const router = require('express').Router();
const fs = require('fs');

fs.readFile('data/users.json', 'utf8', function Create(Error, users){
  });

router.get('/users/:id', (req, res) => {

  const { id } = req.params;
  fs.readFile('data/users.json', 'utf8', function Create(Error, users){
    if (!users[id]) {
        res.statusCode = 404;
        res.statusMessage = 'Error';
      res.send({ "message": "Нет пользователя с таким id" });
      return;
  }
  res.send(users[id]);
  res.send(users);
});
});

module.exports = router;