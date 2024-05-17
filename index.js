// Get the form and form fields
const form = document.getElementById("login-form");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const rememberMeCheckbox = document.getElementById("remember-me");
const submitButton = document.getElementById("submit");

// Check if the user has previously checked "Remember me"
if (localStorage.getItem("rememberMe") === "true") {
  rememberMeCheckbox.checked = true;
  usernameInput.value = localStorage.getItem("username") || "";
  passwordInput.value = localStorage.getItem("password") || "";
}

// Attach an event listener to the form's submit event
form.addEventListener("submit", (event) => {
  // Prevent the form from submitting normally
  event.preventDefault();

  // Get the form fields
  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  // Check if the form fields are valid
  if (!event.target.checkValidity()) {
    return;
  }

  // Check if the username or password fields are empty
  if (username === "" && password === "") {
    alert("Fields are empty");
    return;
  } else if (username === "admin" && password === "") {
    alert("Please fill in password");
    return;
  } else if (username === "" && password === "admin123") {
    alert("Please fill in username");
    return;
  } else if (username === "admin" && password === "admin123") {
    // Store the username and password in local storage if "Remember me" is checked
    if (rememberMeCheckbox.checked) {
      storeCredentials(username, password);
    } else {
      clearCredentials();
    }

    // Add your login logic here
    // For example, you can make an AJAX request to a server-side script
    var xhttp = new XMLHttpRequest();
    xhttp.open('POST', 'profile-data.json', true);

    xhttp.onload = function() {
      var data = JSON.parse(xhttp.responseText);
      console.log(data[0]);
    };

    // or use a library like Firebase to handle authentication
    console.log("Login successful!");
  }
});

// Function to store the username and password in local storage
function storeCredentials(username, password) {
  localStorage.setItem("rememberMe", "true");
  localStorage.setItem("username", username);
  localStorage.setItem("password", password);
}

// Function to clear the username and password from local storage
function clearCredentials() {
  localStorage.setItem("rememberMe", "false");
  localStorage.removeItem("username");
  localStorage.removeItem("password");
}