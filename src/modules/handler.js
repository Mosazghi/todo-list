import "../style.css";
import Tasks from "../tasks/tasks.js";
import { projectTemplate } from "../utils/projectTemplate.js";
import { taskTemplate } from "../utils/taskTemplates.js";
import { navFunctions, navFunctionsProjects, tasks } from "./main.js";
// Default Nav
const defaultNav = document.getElementById("default-nav");
const todoList = document.getElementById("todo-item-list");

todoList.innerHTML = "";

// Projects
const addProjectBtn = document.querySelector(".project-add");
const projectList = document.getElementById("project-list");

const handler = (() => {
  const init = () => {
    listenForClicks();
    initalizeDefaultTasks();
  };

  const initalizeDefaultTasks = () => {
    navFunctions["inbox"]().tasks.forEach((task) => {
      todoList.innerHTML += taskTemplate(task);
    });

    navFunctionsProjects["projectsList"]().projects.forEach((project) => {
      projectList.innerHTML += projectTemplate(project);
    });
  };

  const listenForClicks = () => {
    defaultNav.addEventListener("click", (e) => {
      console.log(e.target.dataset.display);
      if (e.target.dataset.display) {
        todoList.innerHTML = "";
        todoList.innerHTML = `<h1 class="text-4xl mb-5" id="todo-header">${
          navFunctions[`${e.target.dataset.display}`]().name
        }</h1>`;
        navFunctions[`${e.target.dataset.display}`]().tasks.forEach((task) => {
          todoList.innerHTML += taskTemplate(task);
        });
      }
    });

    addProjectBtn.addEventListener("click", (e) => {
      const title = prompt("Enter project title: ");
      projectList.innerHTML += projectTemplate(title);
    });

    projectList.addEventListener("click", (e) => {
      console.log(e.target.dataset.index);
      if (e.target.dataset.index) {
        todoList.innerHTML = "";
        todoList.innerHTML = `<h1 class="text-4xl mb-5" id="todo-header">${e.target.dataset.index}</h1>`;
        navFunctionsProjects[`project`](e.target.dataset.index).tasks.forEach(
          (task) => {
            todoList.innerHTML += taskTemplate(task);
          }
        );
        console.log(todoList.childNodes);
      }
    });

    todoList.addEventListener("click", (e) => {
      if (e.target && !e.target.matches("h1")) {
        if (e.target.classList.contains("delete-btn")) {
          const taskName = e.target.closest("li").dataset.index.trim();
          tasks.removeTask(taskName);
          console.log(tasks.getAllTasks());
          console.log("her", taskName);
        } else if (e.target.classList.contains("edit-btn")) {
          e.target.classList.toggle("bg-slate-300");
          console.log("her2");
        } else if (e.target.classList.contains("complete-btn")) {
          e.target.classList.toggle("bg-slate-300");
          console.log("her3");
        }
        todoList.innerHTML += taskTemplate(tasks.getAllTasks());
      }
    });
  };
  return {
    init,
  };
})();

export default handler;
