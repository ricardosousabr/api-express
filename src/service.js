require('dotenv').config()
const express = require('express')
const app = express();

app.get('/', () => {
  console.log("Rodando")
})

app.listen(process.env.PORT, () => {
  console.log(`Rodando na porta ${process.env.PORT}`)
})