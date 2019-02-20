const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

require('dotenv').config()
const { PORT } = process.env

express()
  .use(cors())
  .disable('x-powered-by')
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true}))
  .use('/', (_, res) => res.status(200).json({ message: 'nice!'}))
  .use((_, res, __) => {
    return res.status(404).json({
      message: 'Resource was not found.'
    })
  })
  .listen(PORT, err => {
    if (!err) {
      console.log(`Server successfully runs on port ${PORT}\n`)
    }
  })
