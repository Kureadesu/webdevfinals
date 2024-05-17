const viewClassListLink = document.getElementById('class-list');
const classListContainer = document.getElementById('class-list-container');

viewClassListLink.addEventListener('click', (e) => {
  e.preventDefault();
  // Generate the class list HTML content
  const studentData = [
    { id: 1, name: 'Student 1', course: 'Course 1' },
    { id: 2, name: 'Student 2', course: 'Course 2' },
    { id: 3, name: 'Student 3', course: 'Course 3' },
    // Add more student data here
  ];

  const tbody = document.querySelector('#class-list-table tbody');
  tbody.innerHTML = '';

  studentData.forEach((student) => {
    const row = document.createElement('tr');

    const idCell = document.createElement('td');
    idCell.textContent = student.id;
    row.appendChild(idCell);

    const nameCell = document.createElement('td');
    nameCell.textContent = student.name;
    row.appendChild(nameCell);

    const courseCell = document.createElement('td');
    courseCell.textContent = student.course;
    row.appendChild(courseCell);

    tbody.appendChild(row);
  });

  classListContainer.style.display = 'block';
});
const closeBtn = document.querySelector('.close-btn');

closeBtn.addEventListener('click', () => {
  const classListContainer = document.querySelector('.class-list-container');
  classListContainer.style.display = 'none';
});
