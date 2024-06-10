const mysql = require('mysql2');
const express = require('express');

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password:  process.env.DB_PASS,
  database: process.env.DB_NAME
})

connection.connect();

connection.query('SELECT * FROM livros', (error, results) => {
  if (error) throw error
  console.log(results)
})

module.exports = connection;