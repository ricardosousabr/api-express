require('dotenv').config()
const express = require('express')
const app = express();
const routerMain = require('./routes');
const port = 3000

app.use('/principal', routerMain)

app.listen(port, () => {
  console.log(`Rodando na porta ${process.env.PORT}`)
})
