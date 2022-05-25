const exspress = require('express')

const { taskControllers } = require('./controllers')

const app = exspress()

app.use(exspress.json())

app.get('/task', taskControllers.getTasks)
app.get('/task/:id', taskControllers.getTasksById)
app.post('/task', taskControllers.createTask)
app.post('/task/:id', taskControllers.removeTask)

module.exports = app
