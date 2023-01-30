var express = require("express");
var router = express.Router();
let connection = require("../modules/connection");

router.post("/", function ({ body }, res, next) {
  console.log(body);
  let sql = `INSERT INTO collection (collection_name, image_url) VALUES ('${body.collectionName}','${body.imageUrl}')`;
  connection.query(sql, function (err, result) {
    if (err) throw err;
    res.send("added collection");
  });
});

router.get("/", (req, res, next) => {
  let sql = `SELECT * FROM collection`;
  connection.query(sql, (err, result) => {
    if (err) console.log(err);
    res.json(result);
  });
});

router.delete("/", ({ body }, res, next) => {
  let sql = `DELETE FROM collection Where collection_name = '${body.collectionName}'`;
  connection.query(sql, (err, result) => {
    if (err) console.log(err);
    res.json("collection deleted");
  });
});

///Update a collection

router.put("/", ({ body }, res, next) => {
  let collectionName = body.collectionName || false;
  let collectionImg = body.collectionImg || false;
  let collectionId= body.collectionId;
  let sql;
  if (collectionName && collectionImg) {
    sql = `UPDATE collection SET collection_name='${collectionName}', image_url='${collectionImg}' Where id = ${collectionId}`;
  } else if (collectionImg) {
    sql = `UPDATE collection SET image_url='${collectionImg}' Where id = ${collectionId}`;
  }else if (collectionName) {
    sql = `UPDATE collection SET collection_name='${collectionName}' Where id = ${collectionId}`;
  }

  connection.query(sql, (err, result) => {
    if (err) console.log(err);
    console.log(result);
    res.json("Collection Updated Successfully");
  });
});

module.exports = router;
