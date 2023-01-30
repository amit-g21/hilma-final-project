var express = require("express");
var router = express.Router();
let connection = require("../modules/connection");



///// checks if password and a username matches in DB if so, returns the object, else, returns an empty obj;
router.post("/", function ({ body }, res, next) {
  console.log(body);
  let sql = `SELECT * FROM user JOIN user_password on user_password.user_id = user.id WHERE username = '${body.userName}' AND password = '${body.password}'`;
  connection.query(sql, function (err, result) {
    if(result.length > 0){
      res.send(result);
    }else{
      res.status(401).send(false);
    }
    if (err) throw err;
  });
});


module.exports = router;
