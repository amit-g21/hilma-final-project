var express = require('express');
var router = express.Router();
let connection = require('../modules/connection');


router.post('/', function({body}, res, next) {
  console.log(body);
  let sql = `INSERT INTO collection (collection_name, image_url) VALUES ('${body.collection_name}','${body.image_url}')`;
  connection.query(sql, function(err, result) {
    if (err) throw err;
    res.send('added collection');
  })
})

router.get('/', (req, res, next) => {
    let sql = `SELECT * FROM collection`;
    connection.query(sql, (err,result) => {
      if (err) console.log(err);
      res.json(result);
    })
})

router.delete('/' , ({body}, res, next) => {
    let sql = `DELETE FROM collection Where collection_name = '${body.collection_name}'`;
    connection.query(sql, (err,result) => {
        if (err) console.log(err);
        res.json('collection deleted');
    })
})


module.exports = router;