const router = require('express').Router();
const fs = require('fs');

router.get('/cards', (req, res) => {
  fs.readFile('data/cards.json', 'utf8', (error, data) => {
    if (error != null) {
      return res.status(500).send({ message: 'На сервере произошла ошибка' });
    } else if (data) {
      const cardsId = JSON.parse(data).find((us) => us._id === idUser);
      res.send({ data: cardsId });

    }
  });
});

module.exports = router;