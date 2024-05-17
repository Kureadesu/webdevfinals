const form = document.getElementById('register-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const usernameInput = document.getElementById('username');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');

  const username = usernameInput.value.trim();
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  // Perform form validation here
  if (!username && !email && !password) {
    alert("All fields are empty.");
  } else if (!email) {
    alert("Email is empty");
  } else if (!username) {
    alert("Username is empty");
  } else if (!password) {
    alert("Password is empty");
  } else {
    // Submit the form data using JavaScript
    const formData = new FormData(form);
    fetch('/register', { // specify the correct API endpoint
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      console.log('Form submitted successfully:', data);
    })
    .catch(error => {
      console.error('Error submitting form:', error);
    });
  }
});
