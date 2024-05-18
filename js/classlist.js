function toggleClassList(subjectId) {
  const table = document.getElementById(`class-list-table-${subjectId}`);
  if (table) {
    table.classList.toggle('hidden');
    table.classList.toggle('visible');
  } else {
    console.error(`Element with id "class-list-table-${subjectId}" not found`);
  }
}