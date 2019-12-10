const express = require('express');
const users = require('./routes/users.js');
const cards = require('./routes/cards.js');
const http = require('http');
const { PORT = 3000 } = process.env;
const app = express();
const todos = [];
const server = http.createServer((req, res) => {

  if (req.url === 'GET localhost:3000/users' && req.method === 'GET') {
    let head = '';
     req.on('data', (chunk) => {
      head += chunk;
    });
req.on('end', () => {
  console.log(todos);
  todos.push(head.split('=')[1]);
  res.writeHead(200, {
        'Content-Type': 'text/html'
      });
      res.end(console.log('name $"./data/users.json"'));
    });
}
  if(req.url === 'GET localhost:3000/cards' && req.method === 'GET') {
    res.writeHead(200, {
        'Content-Type': 'text/html'
  });
  res.end(mainPageMarkup);
  }
});



app.use(express.static(__dirname + '/public/dist'));
app.use('/', users, cards);
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
})
