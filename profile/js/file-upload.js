// Get the form elements
const form = document.getElementById('upload-form');
const fileInput = document.getElementById('file-input');
const uploadButton = document.getElementById('upload-button');
const uploadStatus = document.getElementById('upload-status');

// Add an event listener to the form submission
form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Get the selected file
  const file = fileInput.files[0];

  // Check if a file is selected
  if (!file) {
    uploadStatus.textContent = 'No file selected';
    return;
  }

  // Create a new FormData object
  const formData = new FormData();

  // Add the file to the FormData object
  formData.append('file', file);

  // Set up the AJAX request
  const xhr = new XMLHttpRequest();
  xhr.open('POST', '/upload', true);

  // Set up the request headers
  xhr.setRequestHeader('Content-Type', 'multipart/form-data');

  // Send the request
  xhr.send(formData);

  // Handle the response
  xhr.onload = () => {
    if (xhr.status === 200) {
      uploadStatus.textContent = 'File uploaded successfully!';

      // Fetch the updated list of files from the server
      fetchFiles();
    } else {
      uploadStatus.textContent = 'Error uploading file: ' + xhr.statusText;
    }
  };
});

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