function toggleClassList(subjectId) {
  const table = document.getElementById(`class-list-table-${subjectId}`);
  table.classList.toggle('hidden');
}