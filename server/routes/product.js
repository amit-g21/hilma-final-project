var express = require("express");
var router = express.Router();
let connection = require("../modules/connection");


//// make a new product

router.post("/", function ({ body }, res, next) {
  console.log(body);
  let sql = `INSERT INTO product (collection_id, product_name , price ,product_description , image_url) VALUES (${body.collectionId},'${body.productName}' , ${body.price} , '${body.productDescription}' , '${body.imageUrl}')`;
  connection.query(sql, function (err, result) {
    if (err) throw err;
    res.send("product added");
  });
});

router.get("/", ({ query }, res, next) => {
  let sql;
  if (JSON.stringify(query === "[]")) {
    sql = `SELECT * FROM product`;
  } else {
    sql = `SELECT * FROM product where collection_id = '${query.collectionId}'`;
  }
  connection.query(sql, (err, result) => {
    if (err) console.log(err);
    res.send(result);
  });
});

router.delete("/", ({ body }, res, next) => {
  let sql = `DELETE FROM product Where product_name = '${body.productName}'`;
  connection.query(sql, (err, result) => {
    if (err) console.log(err);
    res.send("product deleted");
  });
});

router.get("/:collectionName/:productName", ({ params }, res, next) => {
  console.log('here');
  let { productName, collectionName } = params;
  let sql = `SELECT collection_name, product_description, product_name, product.image_url,price, product.id FROM product JOIN collection ON product.collection_id = collection.id WHERE product_name = '${productName}' AND collection_name = '${collectionName}'`;
  connection.query(sql, (err, result) => {
    if (err) console.log(err);
    res.send(result);
  });
});

module.exports = router;
