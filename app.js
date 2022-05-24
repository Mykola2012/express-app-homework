const exspress = require('express')

const { todoControllers } = require('./controllers')

const app = exspress()

app.use(exspress.json())

app.get('/task', todoControllers.getTasks)

module.exports = app
