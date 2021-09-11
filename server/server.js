const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const router = express.Router();
const app = express();
const fs = require("fs");
// add router in express app

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "111111",
  database: "joychantphone",
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/", router);

router.get("/", (req, res) => {
  res.sendfile("index.html");
});

router.post("/funding", (req, res) => {
  console.log(`reqw ${req.body}`);
  var name = req.body.name;
  var cellphone = req.body.cellphone;
  var amount = req.body.amount;
  var data = `name ${name} cellphone ${cellphone} amount ${amount}\n`;
  console.log(data);

  fs.appendFile("funding.txt", data, function (err) {
    if (err) throw err;
    console.log("Saved!");
  });

  res.end("yes");
});

app.listen(4000, () => {
  console.log("Started on PORT 4000");
});
