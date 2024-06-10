const express = require('express');
const routerMain = express.Router();


routerMain.get('/', (req, res) => {
  console.log("Rota criada")
});

module.exports = routerMain;
