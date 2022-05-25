const todoDB = [
  {
    id: 0,
    task: 'Studying is not about time. It’s about effort.',
    isDone: false
  }
];

class TodoDB {
  constructor (arr) {
    this.tasks = [...arr];
  }

  createTask (newTask) {
    this.tasks.push({ ...newTask, id: Date.now(), isDone: false });
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
    const foundTaskIndex = this.tasks.findIndex(t => t.id === id);
    this.tasks[foundTaskIndex] = {
      ...this.tasks[foundTaskIndex],
      ...values
    };
    return this.tasks[foundTaskIndex];
  }

  removeTask (id) {
    const foundTaskIndex = this.tasks.findIndex(t => t.id === id);
    this.tasks.splice(foundTaskIndex, 1);
  }
}

const todoTaskDbInstace = new TodoDB(todoDB);

module.exports = todoTaskDbInstace;
