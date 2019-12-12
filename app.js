const express = require('express');
const users = require('./routes/users.js');
const cards = require('./routes/cards.js');
const { PORT = 3000 } = process.env;
const app = express();
app.use(express.static(__dirname + '/public'));
app.use('/', users, cards);
app.get('/*', (req, res) => {
  res.status(404).send({ "message": "Запрашиваемый ресурс не найден" });
});
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});