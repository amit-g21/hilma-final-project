var express = require('express');
var router = express.Router();
let connection = require('../modules/connection');


router.post('/', function({body}, res, next) {
  console.log(body);
  let sql = `INSERT INTO user_password (user_id, password) VALUES (${body.userId},'${body.password}')`;
  connection.query(sql, function(err, result) {
    if (err) throw err;
    res.send('Added password');
  })
});

router.put('/', function({body}, res, next) {
    console.log(body);
    let sql = `UPDATE user_password SET password = '${body.newPassword}' WHERE id = ${body.userId}`;
    connection.query(sql, function(err, result) {
      if (err) throw err;
      res.send('Password changed');
    })
  })



module.exports = router;
