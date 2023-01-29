var express = require("express");
var router = express.Router();
let connection = require("../modules/connection");

router.post("/", function ({ body }, res, next) {
  console.log(body);
  let sql = `INSERT INTO variant (product_id, product_name, variant_size, variant_color, variant_quantity) VALUES (${body.productId},'${body.productName}', '${body.size}', '${body.color}', ${body.qunatity})`;
  connection.query(sql, function (err, result) {
    if (err) throw err;
    res.send("Variant Added Successfully");
  });
});

router.get("/:poductId", function ({ params }, res, next) {
  console.log(body);
  let sql = `SELECT * FROM variants WHERE id=${params}`;
  connection.query(sql, function (err, result) {
    if (err) throw err;
    res.send(JSON.stringify(result));
  });
});

router.delete("/:poductId", function ({ params }, res, next) {
  console.log(body);
  let sql = `DELETE FROM variants WHERE id=${params}`;
  connection.query(sql, function (err, result) {
    if (err) throw err;
    res.send('Variant Deleted');
  });
});

module.exports = router;
