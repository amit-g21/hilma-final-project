var express = require('express');
var router = express.Router();
let connection = require('../modules/connection');


router.post('/', function({body}, res, next) {
  console.log(body);
  let sql = `INSERT INTO product (collection_id, product_name , price , description , image_url) VALUES (${body.collectionId},'${body.productName}' , ${body.price} , '${body.description}' , '${body.imageUrl}')`;
  connection.query(sql, function(err, result) {
    if (err) throw err;
    res.send('producr added');
  })
})

router.get('/', ({query}, res, next) => {
    console.log(req.query);
    let sql = `SELECT * FROM product where collection_id = '${query.collectionId}'`;
    connection.query(sql, (err,result) => {
      if (err) console.log(err);
      res.send(result);
    })
})

router.delete('/' , ({body}, res, next) => {
    let sql = `DELETE FROM product Where product_name = '${body.productName}'`;
    connection.query(sql, (err,result) => {
        if (err) console.log(err);
        res.send('product deleted');
    })
})


module.exports = router;