function showCreateForm() {
    document.getElementById('create-task-form').style.display = 'block';
  }
  
  document.getElementById('task-form').addEventListener('submit', function(e) {
    e.preventDefault();
  
    // Get values from the form
    const taskName = document.getElementById('task-name').value;
    const taskType = document.getElementById('task-type').value;
    const taskDeadline = document.getElementById('task-deadline').value;
  
    // Create a new task element
    const newTask = document.createElement('div');
    newTask.className = 'task';
    newTask.innerHTML = `
        <div class="task-info">
            <img src="../static/icons8-quiz-50.png" width="50" height="50" alt="q">
            <span class="task-name">${taskName}</span>
        </div>
        <div class="task-meta">
            <span class="task-type">${taskType}</span>
        </div>
        <div class="task-meta">
            <span class="deadline">due ${new Date(taskDeadline).toLocaleString()}</span>
        </div>
        <div class="opt">
            <i class="fa-solid fa-ellipsis-vertical"></i>
        </div>
    `;
  
    // Add the new task to the task list
    document.getElementById('task-list').appendChild(newTask);
    

    // Clear the form
    document.getElementById('task-form').reset();
  
    // Hide the form
    document.getElementById('create-task-form').style.display = 'none';
  });