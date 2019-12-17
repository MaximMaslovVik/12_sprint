const router = require('express').Router();
const fs = require('fs');
router.get('/cards', (req, res) => {
  fs.readFile('data/cards.json', 'utf8', (error, data) => {
    const idUser = req.params.id;
    fs.readFile('data/users.json', 'utf8', (error, data) => {
      const cityId = JSON.parse(data).find((us) => us._id === idUser);
    if (error) {
      return res.status(500).send({ "message": "На сервере произошла ошибка" })
    }
    res.send(data);
});
});

module.exports = router;