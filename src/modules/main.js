import Projects from "../projects/projects.js";
import Tasks from "../tasks/tasks.js";

export const tasks = new Tasks();
export const projects = new Projects();

projects.addProject("1");
projects.addProject("2");

tasks.addTask({
  name: "Do the homework",
  dueDate: "2020-12-31",
  priority: "High",
  project: "0",
});
tasks.addTask({
  name: "Make Food",
  dueDate: "2023-09-12",
  priority: "High",
  project: "3",
});
tasks.addTask({
  name: "Do gym",
  dueDate: "2023-08-12",
  priority: "Medium",
  project: "1",
});
tasks.addTask({
  name: "Do the dishes",
  dueDate: "2020-12-31",
  priority: "Low",
  project: "1",
});

function inbox() {
  return { name: "Inbox", tasks: tasks.getAllTasks() };
}

function today() {
  return { name: "Today", tasks: tasks.getTodaysTasks() };
}

function weekly() {
  return { name: "Week", tasks: tasks.getWeeklyTasks() };
}

function important() {
  return { name: "Important", tasks: tasks.getImportantTasks() };
}

function completed() {
  return { name: "Completed", tasks: tasks.getCompletedTasks() };
}

function project(project) {
  return { name: project, tasks: tasks.getProjectTasks(project) };
}

function projectsList() {
  return { name: "Projects", projects: projects.getAllProjects() };
}

export const navFunctions = {
  today: today,
  inbox: inbox,
  important: important,
  weekly: weekly,
  completed: completed,
};

export const navFunctionsProjects = {
  projectsList: projectsList,
  project: project,
};
