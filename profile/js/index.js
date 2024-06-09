// Get the form and form fields
const form = document.getElementById("login-form");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const rememberMeCheckbox = document.getElementById("remember-me");

form.addEventListener("submit", login);

function login(event){
  event.preventDefault();

// accounts
const faculty = {
  "username" : "faculty",
  "password" : "test1",
  "email" : "testfaculty@gmail.com",
  "redirectUrl": "/patch 1.1/html/faculty-dashboard.html"
}
const student = {
  "username" : "kurea",
  "password" : "kUreadesu3",
  "email" : "kurea3@gmail.com",
  "redirectUrl": "../html/dashboard-student.html"
}

// Attach an event listener to the form's submit event
form.addEventListener("submit", (event) => {
  // Prevent the form from submitting normally
  event.preventDefault();

  // Get the form fields
  const username = usernameInput.value;
  const password = passwordInput.value;

  // Check if the form fields are valid
  if (!event.target.checkValidity()) {
    return;
  }

  // Check if the username or password fields are empty
  if (username === "" && password === "") {
    alert("Fields are empty");
    return;
  } else if (!username === "" && password === "") {
    alert("Please fill in password");
    return;
  } else if (username === "" && !password === "") {
    alert("Please fill in username");
    return;
  } else {
    // Check if the username and password match any of the accounts
    const accounts = [faculty, student];
    const matchedAccount = accounts.find((account) => {
      return account.username === username && account.password === password;
    });
    
    localStorage.removeItem(username, password);
    if (matchedAccount) {
      // Redirect the user to the appropriate page based on their account type
      window.location.assign(matchedAccount.redirectUrl);
    } else {
      window.alert("Invalid username or password");
    }
  }
});

//AJAX request
var http = new XMLHttpRequest();
http.open("POST", "server.js", true);

/*
// Function to store the username and password in local storage
function storeCredentials(username, password) {
  
}

// Function to clear the username and password from local storage
function clearCredentials() {
  
}
*/
}