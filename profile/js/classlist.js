function toggleClassList(subjectId) {
  const table = document.getElementById(`class-list-table-${subjectId}`);
  if (table) {
    table.classList.toggle('hidden');
    table.classList.toggle('visible');
    
    // Get the number of rows in the table
    const rowCount = table.rows.length;
    
    // Create an h3 element to display the row count
    const rowCountElement = document.getElementById(`row-count-${subjectId}`);
    if (!rowCountElement) {
      rowCountElement = document.createElement('h3');
      rowCountElement.id = `row-count-${subjectId}`;
      table.parentNode.appendChild(rowCountElement);
    }
    
    // Update the text content of the h3 element
    rowCountElement.innerHTML = `${rowCount}`;
  } else {
    console.error(`Element with id "class-list-table-${subjectId}" not found`);
  }
}