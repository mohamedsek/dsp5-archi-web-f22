const path = require('path');
const express = require('express');
const app = express();

const formations = require("./mock/formations.js");
// const company = require("./mock/company.js");


app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/public/index.html`);
});

app.get('/offers', (req, res) => {
    // TODO fetch data from DB when implemented
    const data = formations;

    res.send(JSON.stringify(data));
});

app.get('/company', (req, res) => {
    const mysql = require('mysql');
    const db = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "gestion_projet"
    });

    db.connect(function (err) {
        if (err) throw err;
    });

    db.query("SELECT * FROM `e_entreprise` LIMIT 1", function (err, result) {
        if (err) throw err;
        else {
            const json = Object.values(JSON.parse(JSON.stringify(result)));
            res.send(JSON.stringify(json[0]));
        }
    });

});

app.use(express.static(path.join(__dirname, 'public')));

app.listen(3333, () => {
    console.log('Application listening on port 3333!');
});