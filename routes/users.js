const router = require('express').Router();
const fs = require('fs');

router.get('/users', (req, res) => {
  fs.readFile('data/users.json', 'utf8', (error, data) => {
    const json = JSON.parse(data);
    if (error) {
      return res.status(500).send({ "message": "На сервере произошла ошибка" }).
    }
    res.send(data);
  });
});

router.get('/users/:id', (req, res) => {
  const idUser = req.params.id;
  fs.readFile('data/users.json', 'utf8', (error, data) => {
    const cityId = JSON.parse(data, id).find((us) => us._id === idUser);
    if (cityId) {
      res.send(cityId);
    } else if (!cityId) {
      res.statusCode = 404;
      res.statusMessage = 'Error';
      res.send({ message: 'Такого пользователя нет' });
    };
  });
});

module.exports = router;