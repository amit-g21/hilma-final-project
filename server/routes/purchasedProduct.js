var express = require('express');
var router = express.Router();
let connection = require('../modules/connection');


router.post('/', function({body}, res, next) {
  console.log(body);
  let sql = `INSERT INTO purchased_product (order_id , product_id, user_id ) VALUES (${body.orderId },${body.productId},${body.userId})`;
  connection.query(sql, function(err, result) {
    if (err) throw err;
    res.send('purchased product added');
  })
})

router.get('/', (req, res, next) => {
    let sql = `SELECT * FROM purchased_product`;
    connection.query(sql, (err,result) => {
      if (err) console.log(err);
      res.json(result);
    })
})

router.delete('/' , ({body}, res, next) => {
    let sql = `DELETE FROM purchased_product Where order_id = '${body.orderId}'`;
    connection.query(sql, (err,result) => {
        if (err) console.log(err);
        res.json('purchased product deleted');
    })
})


module.exports = router;