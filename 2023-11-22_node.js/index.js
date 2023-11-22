const express = require('express');
const app = express(); //-- http szervert tududnk vele indítani

// JSON adatok fogadása miatt kell
const bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())


app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/bela', (req, res) => {
    res.send('Ez Béla lapja');
});
app.get('/bela/:id', (req, res) => {
    let id = req.params.id;
    res.send(`Ez Béla lapja, id: ${id}`);
});

app.get('/bela/:id/:nev', (req, res) => {
    let id = req.params.id;
    let nev = req.params.nev;
    res.send(`Ez Béla lapja, id: ${id}, nev: ${nev}`);
});

app.post('/bela', (req, res) => {
    let id = req.body.id;
    let name = req.body.name;
    res.send(`Ez Béla lapja, id: ${id}, name: ${name}`);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
