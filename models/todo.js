const { format } = require('date-fns');

const todoDB = [
  {
    id: 0,
    task: 'Studying is not about time. It’s about effort.',
    isDone: false,
    createdAt: format(new Date(), 'Y-MM-dd')
  },
  {
    id: 1,
    task: 'The level of education is in direct correlation with your salary.',
    isDone: false,
    createdAt: format(new Date(), 'Y-MM-dd')
  }
];

class TodoDB {
  constructor (arr) {
    this.tasks = [...arr];
  }

  createTask (newTask) {
    this.tasks.push({
      ...newTask,
      id: Date.now(),
      isDone: false,
      createdAt: format(new Date(), 'Y-MM-dd')
    });
    return this.tasks[this.tasks.length - 1];
  }

  getTasks () {
    return [...this.tasks];
  }

  getTasksById (id) {
    const foundIndex = this.tasks.findIndex(t => t.id === Number(id));
    return foundIndex === -1 ? null : this.tasks[foundIndex];
  }

  updateTask (id, values) {
    const foundTaskIndex = this.tasks.findIndex(t => t.id === Number(id));
    this.tasks[foundTaskIndex] = {
      ...this.tasks[foundTaskIndex],
      ...values
    };
    return foundTaskIndex === -1 ? null : this.tasks[foundTaskIndex];
  }

  removeTask (id) {
    const foundTaskIndex = this.tasks.findIndex(t => t.id === Number(id));

    if (foundTaskIndex !== -1) {
      this.tasks.splice(foundTaskIndex, 1);
    }

    return foundTaskIndex === -1 ? null : this.tasks.splice(foundTaskIndex, 1);
  }
}

const todoTaskDbInstace = new TodoDB(todoDB);

module.exports = todoTaskDbInstace;
