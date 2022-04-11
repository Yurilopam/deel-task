const express = require('express')
const routes = require('./routes')
const bodyParser = require('body-parser');
const app = express()
require('./database')

async function init() {
  try {
    app.use(bodyParser.json());
    app.use(routes)
    app.listen(3333, () => {
      console.log('Express App Listening on Port 3333')
    })
  } catch (error) {
    console.error(`An error occurred: ${JSON.stringify(error)}`)
    process.exit(1)
  }
}

init()