const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const router = express.Router();
const app = express();
const fs = require("fs");
const cors = require("cors");

app.use(
  cors({
    allowedHeaders: ["Content-Type"], // headers that React is sending to the API
    exposedHeaders: ["Content-Type"], // headers that you are sending back to React
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
  })
);

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
  var money = req.body.money;
  console.log("body", req.body);
  var data = `${name}\t${cellphone}\t${money}\n`;
  console.log("data", data);

  fs.appendFile("funding.txt", `${data}\n`, function (err) {
    if (err) throw err;
    console.log("Saved!");
  });

  res.end("yes");
});

router.post("/reservation", (req, res) => {
  console.log(`reqw ${req.body}`);
  var name = req.body.name;
  var cellphone = req.body.cellphone;
  var amount = req.body.amount;
  console.log("body", req.body);
  var data = `${name}\t${cellphone}\t${amount}\n`;
  console.log("data", data);

  fs.appendFile("reservation.txt", `${data}\n`, function (err) {
    if (err) throw err;
    console.log("Saved!");
  });

  res.end("yes");
});

app.listen(4000, () => {
  console.log("Started on PORT 4000");
});
