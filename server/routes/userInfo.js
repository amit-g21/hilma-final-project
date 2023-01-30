var express = require('express');
var router = express.Router();
let connection = require('../modules/connection');


router.post('/', function({body}, res, next) {
  console.log(body);
  let sql = `INSERT INTO user (username, full_name ,phone_number,email,birth_date,address,is_admin ) VALUES ('${body.username}','${body.fullName}','${body.phoneNumber}','${body.email}', DATE '${body.birthDate}','${body.address}',${body.isAdmin})`;
  connection.query(sql, function(err, result) {
    if (err) throw err;
    res.send('added user');
  })
})

module.exports = router;
