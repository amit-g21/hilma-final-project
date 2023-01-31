var express = require("express");
var router = express.Router();
let connection = require("../modules/connection");

////// Add a new order to DB

router.post("/", function ({ body }, res, next) {
  console.log(body);
  let sql = `INSERT INTO order_items (full_name , date, total_price, products_quantity ,city , card_number , order_number) VALUES ('${body.fullName}',  '${body.date}', ${body.totalPrice}, ${body.orderQuantity} , '${body.city}' , '${body.cardNumber}' , '${body.orderNumber}')`;
  connection.query(sql, function (err, result) {
    if (err) throw err;
    res.send("order saved to DB");
  });
});

//Get all orders

router.get("/", function ({ query }, res, next) {
  let sql = `SELECT * FROM order_items`;
  connection.query(sql, function (err, result) {
    if (err) throw err;
    res.send(result);
  });
});


///Delete an order if user refunded

router.delete("/", function ({ body }, res, next) {
  console.log('here');
  let sql = `DELETE FROM order_items WHERE id=${body.orderId}`;
  connection.query(sql, function (err, result) {
    if (err) throw err;
    res.send('Order Deleted');
  });
});

module.exports = router;
