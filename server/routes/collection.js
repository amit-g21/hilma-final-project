var express = require('express');
var router = express.Router();
let connection = require('../modules/connection');


router.post('/', function({body}, res, next) {
  console.log(body);
  let query = `INSERT INTO collection (collection_name, image_url) VALUES ('${body.collection_name}','${body.image_url}')`;
  connection.query(query, function(err, result) {
    if (err) throw err;
    res.send('added collection');
  })
})

router.get('/', (req, res, next) => {
    let query = `SELECT * FROM collection`;
    connection.query(query, (err,result) => {
      if (err) console.log(err);
      res.json(result);
    })
})

router.delete('/' , (req, res, next) => {
    let query = `DELETE FROM collection Where collection_name = '${req.body.collection_name}'`;
    connection.query(query, (err,result) => {
        if (err) console.log(err);
        res.json('collection deleted');
    })
})


module.exports = router;