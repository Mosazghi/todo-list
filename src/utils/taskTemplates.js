export function taskTemplate(task) {
  return `<li class="flex items-center justify-between hover:bg-slate-300 cursor-pointer rounded-xl p-3 transition-all" data-index="${
    task.name
  }">
    <div class="flex items-center">
      <span class="complete-btn material-symbols-outlined me-2 ${
        task.isComplete ? "text-green-500" : "text-red-500"
      }"> task_alt </span>
      <p class="overflow-hidden">${task.name}</p>
    </div>
    <div class="flex-shrink-0">
      <span class="edit-btn material-symbols-outlined me-1"> edit </span>
      <span class="delete-btn material-symbols-outlined text-red-500">delete</span>
    </div>
  </li>`;
}
