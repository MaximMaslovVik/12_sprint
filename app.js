const express = require('express');
const path = require('path');
const users = require('./routes/users.js');
const cards = require('./routes/cards.js');

const { PORT = 3000 } = process.env;
const app = express();
app.use(express.static(path.join(__dirname, '/public/')));
app.use('/', users);
app.use('/', cards);
app.listen(PORT, () => {});

app.get('/*', (req, res) => {
  res.statusCode = 404;
  res.statusMessage = 'Error';
  res.send({ message: 'Запрашиваемый ресурс не найден' });
});