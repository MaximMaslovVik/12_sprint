const router = require('express').Router();
const cards = require('.././data/cards.json');
/*const fs = require('fs');

const reader = fs.createReadStream('./in.txt', { encoding: 'utf8' });
const writer = fs.createWriteStream('./out.txt', { encoding: 'utf8' });

reader.pipe(writer);

reader.on('data', (data) => {
    writer.write(data);
});

reader.on('end', () => {
    writer.end();
});

reader.on('error', (err) => {
  console.log(err);
});*/

module.exports = router;