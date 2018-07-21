const http = require('http')
const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const config = require('./utils/config')

mongoose
  .connect(config.dbUrl)
  .then(() => {
    console.log('connected to database', config.dbUrl)
  })
  .catch(err => {
    console.log(err)
  })

mongoose.Promise = global.Promise

app.use(express.static('public'))
app.use(cors())
app.use(require('body-parser').json())
app.use(express.static('build'))
app.use(require('./utils/middleware').logger)
app.use('/api/taxa', require('./controllers/taxon'))
app.use(require('./utils/middleware').error)

const server = http.createServer(app)
server.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`)
})
server.on('close', () => {
  mongoose.connection.close()
})

module.exports = {
  app, server
}
