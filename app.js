const exspress = require('express');

const { taskControllers } = require('./controllers');

const app = exspress();

app.use(exspress.json());

app.get('/tasks', taskControllers.getTasks);
app.get('/tasks/:id', taskControllers.getTasksById);
app.post('/tasks', taskControllers.createTask);
app.patch('/tasks/:id', taskControllers.updateTasks);
app.delete('/tasks/:id', taskControllers.removeTask);

module.exports = app;
