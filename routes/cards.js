const router = require('express').Router();
const fs = require('fs');

router.get('/cards', (req, res) => {
  fs.readFile('data/cards.json', 'utf8', (err, data) => {
    const cardsId = JSON.parse(data).find((us) => us._id === idUser);
    if (cardsId) {
      res.send(cardsId);
    } else if (!cardsId) {
      return res.status(500).send({ message: 'На сервере произошла ошибка' });
    }
  });
});

module.exports = router;