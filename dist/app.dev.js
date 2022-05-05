"use strict";

var path = require('path');

var express = require('express');

var app = express();

var formations = require("./mock/formations.js"); // const company = require("./mock/company.js");


app.get('/', function (req, res) {
  res.sendFile("".concat(__dirname, "/public/index.html"));
});
app.get('/offers', function (req, res) {
  // TODO fetch data from DB when implemented
  var data = formations;
  res.send(JSON.stringify(data));
});
app.get('/company', function (req, res) {
  var mysql = require('mysql');

  var db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "gestion_projet"
  });
  db.connect(function (err) {
    if (err) throw err;
  });
  db.query("SELECT * FROM `e_entreprise` LIMIT 1", function (err, result) {
    if (err) throw err;else {
      var json = Object.values(JSON.parse(JSON.stringify(result)));
      res.send(JSON.stringify(json[0]));
    }
  });
});
app.use(express["static"](path.join(__dirname, 'public')));
app.listen(3333, function () {
  console.log('Application listening on port 3333!');
});