export function projectTemplate(project) {
  return `
    <li class="flex items-center justify-between hover:bg-slate-300 cursor-pointer rounded-xl p-3 transition-all" data-index="${project.id}">
    <span class="material-symbols-outlined"> folder </span>
    ${project.title} 
    <div>
      <span class="material-symbols-outlined me-1"> edit </span>
      <span class="material-symbols-outlined text-red-500">
        delete
      </span>
    </div>
  </li>
    `;
}
