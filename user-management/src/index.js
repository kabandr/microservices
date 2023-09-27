const express = require('express')
const mongoose = require('mongoose')
const app = express()
// require('dotenv').config()

const port = process.env.PORT || 3000
const db = process.env.MONGO_URI

const connect = async (err) => {
  if (err) throw err
  await mongoose.connect(db)
  console.log("MongoDB Connected!")
}

app.get('/', (req, res) => {
  res.send('Hello World! Welcome to the User Management service')
});

(async () => {
  try {
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`)
    });
    await connect()
  } catch (error) {
    console.log(error.message)
  }
})()
