import Project from "./project.js";

export default class Projects {
  constructor() {
    this.projects = [];
  }

  addProject(title) {
    this.projects.push(new Project(title));
  }

  removeProject(id) {
    this.projects = this.projects.filter((project) => project.id !== id);
  }

  getAllProjects() {
    return this.projects;
  }
}
