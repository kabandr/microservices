const express = require('express')
const { Client } = require('pg')
const app = express()

const port = process.env.PORT || 3001

const client = new Client({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT
});

const connect = () => {
  client.connect((err) => {
    if (err) throw err
    console.log("PostgresDB Connected!")
  });
};

app.get('/', (req, res) => {
  res.send('Hello World! Welcome to the Order Processing service')
});

(() => {
  try {
    connect()
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`)
    });
  } catch (error) {
    console.log(error.message)
  }
})()