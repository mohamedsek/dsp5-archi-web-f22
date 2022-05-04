const path = require('path');
const express = require('express');
const app = express();

const formations = require("./mock/formations.js");
const company = require("./mock/company.js");


app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/public/index.html`);
});

app.get('/offers', (req, res) => {
    // TODO fetch data from DB when implemented
    const data = formations;

    res.send(JSON.stringify(data));
});

app.get('/company', (req, res) => {
    const data = company;

    res.send(JSON.stringify(data));
});

app.use(express.static(path.join(__dirname, 'public')));

app.listen(3333, () => {
    console.log('Application listening on port 3333!');
});