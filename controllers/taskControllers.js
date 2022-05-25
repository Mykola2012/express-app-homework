const { Todo } = require('./../models')

module.exports.getTasks = (req, res) => {
  const tasks = Todo.getTasks()
  res.status(200).send(tasks)
}

module.exports.getTasksById = (req, res) => {
  const { id } = req.params
  const foundTasks = Todo.getTasksById(id)

  foundTasks
    ? res.status(200).send(foundTasks)
    : res.status(200).send('Tasks Not Found')
}

module.exports.createTask = (req, res) => {
  const { body } = req
  const newTask = Todo.createTask(body)
  res.status(201).send(newTask)
}

// module.exports.updateTask = (req, res) => {
//   const { id } = req.params;
//   const { body } = req;
// };

module.exports.removeTask = (req, res) => {
  const { id } = req.params
  const foundTask = Todo.getTasksById(id)

  if (foundTask) {
    Todo.removeTask(id)
    res.status(200).end()
    return
  }
  res.status(404).send('Tasks Not Found')
}
