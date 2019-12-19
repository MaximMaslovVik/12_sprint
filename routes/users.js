const router = require('express').Router();
const fs = require('fs');

router.get('/users', (req, res) => {
  fs.readFile('data/users.json', 'utf8', (error, data) => {
    if (error != null) {
      return res.status(500).send({ message: 'На сервере произошла ошибка' });
    } else if (data) {
      const json = JSON.parse(data);
      res.send({ data: json });

    }
  });
});

router.get('/users/:id', (req, res) => {
  const idUser = req.params.id;
  fs.readFile('data/users.json', 'utf8', (error, data) => {
    if (error != null) {
      return res.status(404).send({ message: 'Такого пользователя нет' });
    } else if (data) {
      const cityId = JSON.parse(data, id).find((us) => us._id === idUser);
      res.send({ data: cityId });

    }
  });
});

module.exports = router;