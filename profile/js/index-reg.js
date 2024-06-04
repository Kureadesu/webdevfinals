const form = document.getElementById('register-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const usernameInput = document.getElementById('username');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const confirmPasswordInput = document.getElementById('confirm-password');

  const username = usernameInput.value.trim();
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();
  const confirmPassword = confirmPasswordInput.value.trim();

  // Perform form validation here
  if (!username || !email || !password || !confirmPassword) {
    alert("All fields are required.");
  } else if (password !== confirmPassword) {
    alert("Passwords do not match.");
  } else {
    // Create a JSON object to send to the server
    const userData = {
      username,
      email,
      password
    };

    // Submit the form data using AJAX
    const xhr = new XMLHttpRequest();
    xhr.open('POST', '/register', true);
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.onload = function() {
      if (xhr.status === 200) {
        console.log('Form submitted successfully:', xhr.responseText);
        // Display success message
        document.getElementById('success-message').innerHTML = 'Registration successful! You can now login.';
      } else {
        console.error('Error submitting form:', xhr.statusText);
      }
    };

    xhr.send(JSON.stringify(userData));
  }
});