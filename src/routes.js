const express = require('express');
const routerMain = express.Router();
const {GetBooks} = require('./connetion')

routerMain.get('/', async (req, res) => {
    console.log("Rota criada")
    const books = await GetBooks();
    res.json({body: books});
});

module.exports = routerMain;
