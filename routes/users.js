const router = require('express').Router();
const fs = require('fs');
router.get('/users', (req, res) => {
  fs.readFile('data/users.json', 'utf8', function(error,data){
    if(error) throw error;
    res.send(data);
  });
});
router.get('/users/:id', (req, res) => {
  let idUser  = req.params.id;
  fs.readFile('data/users.json', 'utf8', function(error,data){
    let cityId = JSON.parse(data).find(us => us._id === idUser);
    console.log(cityId);
    if (cityId){
      res.send(cityId);
      console.log(cityId);
        } else if (!cityId) {
      res.statusCode = 404;
      res.statusMessage = 'Error';
      res.send({  "message": "Нет пользователя с таким id" });
      return;
  }
  });
});
module.exports = router;