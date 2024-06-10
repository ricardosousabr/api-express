const express = require('express');
const routerMain = express.Router();
const resultAPI = require('./connetion')


routerMain.get('/', (req, res) => {
  console.log("Rota criada")
  console.log(resultAPI)
});

module.exports = routerMain;
