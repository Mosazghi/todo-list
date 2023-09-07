import { parseISO } from "date-fns";
import { isOneWeekApart, isToday } from "../utils/helpers.js";
import Task from "./task.js";

export default class Tasks {
  constructor() {
    this._tasks = [];
  }

  addTask(task) {
    this._tasks.push(
      new Task(task.name, task.dueDate, task.priority, task.project)
    );
  }

  removeTask(name) {
    console.log("removing task: ", name);
    this._tasks = this._tasks.filter((task) => task.name !== name);
  }

  toggleTask(id) {
    const task = this.findTaskById(id);
    task.isComplete = !task.isComplete;
  }

  findTaskById(id) {
    return this._tasks.find((task) => task.id == id);
  }

  getAllTasks() {
    return this._tasks;
  }

  // ! WATCH OUT FOR 0 & 1
  getTodaysTasks() {
    return this._tasks.filter((task) => isToday(parseISO(task.dueDate)));
  }

  getWeeklyTasks() {
    return this._tasks.filter((task) => isOneWeekApart(parseISO(task.dueDate)));
  }

  getImportantTasks() {
    return this._tasks.filter((task) => task.priority === "High");
  }

  getCompletedTasks() {
    return this._tasks.filter((task) => task.isComplete);
  }

  getProjectTasks(project) {
    console.log("target project: ", project, "\n", this._tasks);
    return this._tasks.filter((task) => task.project == project);
  }
}
