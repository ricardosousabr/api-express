const express = require('express')
const app = express();
const port = 3000;
console.log("Hello world!");

app.get('/', () => {
  console.log("Rodando")
})

app.listen(port, () => {
  console.log("Rodando")
})