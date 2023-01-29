var express = require('express');
var router = express.Router();
let connection = require('../modules/connection');


router.post('/', function({body}, res, next) {
  console.log(body);
  let sql = `INSERT INTO action (user_id , date , product_id , city) VALUES (${body.user_id},'${body.date}',${body.product_id},'${body.city}')`;
  connection.query(sql, function(err, result) {
    if (err) throw err;
    res.send('action added');
  })
})

router.get('/', (req, res, next) => {
    let sql = `SELECT * FROM action`;
    connection.query(sql, (err,result) => {
      if (err) console.log(err);
      res.json(result);
    })
})

router.delete('/' , ({body}, res, next) => {
    let sql = `DELETE FROM action Where id = '${body.id}'`;
    connection.query(sql, (err,result) => {
        if (err) console.log(err);
        res.json('action deleted');
    })
})


module.exports = router;