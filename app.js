const express = require('express');
const users = require('./routes/users.js');
const cards = require('./routes/cards.js');
const { PORT = 3000 } = process.env;
const app = express();

app.use(express.static(__dirname + '/public/dist'));
app.use('/', users, cards);
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
});
