const { Todo } = require('./../models');

module.exports.getTasks = (req, res) => {
  const tasks = Todo.getTasks();
  res.status(200).send(tasks);
};

module.exports.getTasksById = (req, res) => {
  const { id } = req.params;
  const foundTasks = Todo.getTasksById(id);

  foundTasks
    ? res.status(200).send(foundTasks)
    : res.status(404).send('Tasks Not Found');
};

module.exports.createTask = (req, res) => {
  const { body } = req;
  const newTask = Todo.createTask(body);
  res.status(201).send(newTask);
};

module.exports.updateTasks = (req, res) => {
  const {
    body,
    params: { id }
  } = req;

  const updateTask = Todo.updateTask(id, body);

  if (updateTask !== null) {
    return res.status(200).send(updateTask);
  }

  res.status(404).send('Task Not Found');
};

module.exports.removeTask = (req, res) => {
  const { id } = req.params;
  const removeTask = Todo.removeTask(id);

  if (removeTask !== null) {
    return res.status(204).end();
  }
  res.status(404).send('Tasks Not Found');
};
