var express = require("express");
var router = express.Router();
let connection = require("../modules/connection");

router.get("/", function (req, res, nex) {
  let sql = "SELECT * FROM user;";
  connection.query(sql, function (err, result) {
    if (err) throw err;
    res.json(result);
  });
});

router.get("/:user", function ({params}, res, next) {
  console.log('fed')
  let {user} = params;
  console.log(user);
  let sql = `SELECT * FROM user WHERE username = '${user}';`
  connection.query(sql, function (err, result) {
    if(err) throw err;
    res.json(result);
  })
})

router.post("/", function ({ body }, res, next) {
  console.log(body);
  let sql = `INSERT INTO user (username, full_name ,phone_number,email,birth_date,address,is_admin ) VALUES ('${body.username}','${body.fullName}','${body.phoneNumber}','${body.email}', DATE '${body.birthDate}','${body.address}',${body.isAdmin});`;
  connection.query(sql, function (err, result) {
    if (err) throw err;
    // res.send('added user');
    let newSql = `SELECT id FROM user WHERE username = '${body.username}'`;
    connection.query(newSql, function (err, result) {
      if (err) throw err;
      console.log(result);
      let finalSql = `INSERT INTO user_password (user_id, password) VALUES (${result[0].id},'${body.password}')`;
      connection.query(finalSql, function (err, result) {
        if (err) throw err;
        res.json("User added successfully");
      });
    });
  });
});

router.put("/", ({ body }, res, next) => {
  console.log(body.editUser);
  let sql = `UPDATE user SET is_admin=${body.isAdmin} WHERE username = '${body.editUser}';`
  connection.query(sql, (err, result) => {
    if (err) console.log(err);
    console.log(result);
    res.json("user Updated Successfully");
  });
});

// router.post('/', function ({ body }, res, next) {
//   connection.query(`select;`, function (err, result) {
//       if (err) console.log(err);
//       console.log('post added successfully');
//       connection.query(`SELECT * FROM posts WHERE post_id=${result.insertId};`, function (err, result) {
//           if (err) console.log(err);
//           res.json(result);
//       })
//   })
// })

module.exports = router;
