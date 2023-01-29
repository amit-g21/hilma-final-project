var express = require('express');
var router = express.Router();
let connection = require('../modules/connection');


router.post('/', function({body}, res, next) {
  console.log(body);
  let sql = `INSERT INTO user (username, full_name ,phone_number,email,birth_date,address,is_admin ) VALUES ('${body.username}','${body.full_name}','${body.phone_number}','${body.email}', DATE '${body.birth_date}','${body.address}',${body.is_admin})`;
  connection.query(sql, function(err, result) {
    if (err) throw err;
    res.send('added user');
  })
})

module.exports = router;
