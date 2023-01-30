var express = require('express');
var router = express.Router();
let connection = require('../modules/connection');


router.post('/', function ({ body }, res, next) {
  console.log(body);
  let sql = `INSERT INTO product (collection_id, product_name , price , product_description , image_url) VALUES (${body.collectionId},'${body.productName}' , ${body.price} , '${body.description}' , '${body.imageUrl}')`;
  connection.query(sql, function (err, result) {
    if (err) throw err;
    res.send('producr added');
  })
})

router.get('/:collectionName', ({ params }, res, next) => {
  let {collectionName} =  params 
  console.log(collectionName);
  let sql = `SELECT * FROM product JOIN collection ON product.collection_id = collection.id WHERE collection_name = '${collectionName}'`;
  connection.query(sql, (err, result) => {
    if (err) console.log(err);
    res.send(result);
  })
})

router.delete('/', ({ body }, res, next) => {
  let sql = `DELETE FROM product Where product_name = '${body.productName}'`;
  connection.query(sql, (err, result) => {
    if (err) console.log(err);
    res.send('product deleted');
  })
})


module.exports = router;