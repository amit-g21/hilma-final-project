var express = require("express");
var router = express.Router();
let connection = require("../modules/connection");



///// POST a new Variant

router.post("/", function ({ body }, res, next) {
  console.log(body);
  let sql = `INSERT INTO variant (product_id, variant_name, variant_size, variant_color, variant_quantity) VALUES (${body.productId},'${body.variantName}', '${body.size}', '${body.color}', ${body.quantity})`;
  connection.query(sql, function (err, result) {
    if (err) throw err;
    res.send("Variant Added Successfully");
  });
});


///// GET all variants from a specific product

router.get("/:productId", function ({ params }, res, next) {
  console.log('params: ', params);
  let sql = `SELECT * FROM variant WHERE product_id=${params.productId}`;
  connection.query(sql, function (err, result) {
    if (err) throw err;
    res.send(result);
  });
});


///// DELETE specific Variant

router.delete("/:variantId", function ({ params }, res, next) {
  let sql = `DELETE FROM variant WHERE id=${params.variantId}`;
  connection.query(sql, function (err, result) {
    if (err) throw err;
    res.send('Variant Deleted');
  });
});

module.exports = router;
