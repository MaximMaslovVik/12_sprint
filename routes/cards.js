const routerCards = require('express').Router();
const fs = require('fs');
fs.readFile('data/cards.json', 'utf8', function Create(Error, id){
});

router.get('/cards/:id', (req, res) => {

const { id } = req.params;
fs.readFile('data/cards.json', 'utf8', function Create(Error, name){
  if (!name[id]) {
      res.statusCode = 404;
      res.statusMessage = 'Error';
    res.send({ "message": "Нет пользователя с таким id" });
    return;
}
res.send(name[id]);
res.send(cards);
});
});

module.exports = routerCards;