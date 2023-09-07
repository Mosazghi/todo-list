export default class Project {
  static lastID = 0;

  constructor(title) {
    this.title = title;
    this.id = Project.lastID++;
  }
}
