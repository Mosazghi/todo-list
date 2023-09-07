export default class Task {
  static lastId = 0;

  constructor(name, dueDate, priority, project) {
    this.name = name;
    this.dueDate = dueDate;
    this.priority = priority;
    this.project = project;
    this.isComplete = false;
    this.id = Task.lastId++;
  }
}
