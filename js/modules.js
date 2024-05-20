// Get the table body element
const tableBody = document.querySelector('#file-table tbody');

// Define a function to generate the table rows
const generateTableRows = (files) => {
  // Clear the existing rows
  tableBody.innerHTML = '';

  // Loop through the files and generate a table row for each one
  files.forEach((file) => {
    const row = document.createElement('tr');

    const fileNameCell = document.createElement('td');
    fileNameCell.textContent = file.name;
    row.appendChild(fileNameCell);

    const fileSizeCell = document.createElement('td');
    fileSizeCell.textContent = file.size + ' bytes';
    row.appendChild(fileSizeCell);

    const uploadDateCell = document.createElement('td');
    uploadDateCell.textContent = new Date(file.uploadDate).toLocaleString();
    row.appendChild(uploadDateCell);

    tableBody.appendChild(row);
  });
};

// Define a function to fetch the list of uploaded files from the server
const fetchFiles = async () => {
  try {
    const response = await fetch('/files');
    const files = await response.json();
    generateTableRows(files);
  } catch (error) {
    console.error(error);
  }
};

// Fetch the list of uploaded files when the page loads
fetchFiles();