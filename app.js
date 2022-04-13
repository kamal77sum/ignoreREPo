const express = require('express');
const app = express();
const routes = require('./routes/routes')
const Connection = require('./db/database').Connection
require('dotenv').config()

app.use(express.json());
app.use('/api', routes);

PORT = process.env.port || 3000
url = process.env.url

Connection.open(url)

module.exports = app