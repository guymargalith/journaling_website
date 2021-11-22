const express = require('express')
const queryRouter = require('./controllers/queryRouter')
const updateRouter = require('./controllers/updateRouter')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use('/search', queryRouter)
app.use('/update', updateRouter)

app.get('/', function (req, res) {
   res.send('Welcome');
 })

module.exports = app;