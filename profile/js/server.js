const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = express.Router();

// Middleware to parse JSON request bodies
app.use(bodyParser.json());

// Use the router middleware
app.use('/', router);
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

  // Login endpoint
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const accounts = [admin, faculty, student]; 
    const matchedAccount = accounts.find((account) => {
      return account.username === username && account.password === password;
    });
  
    if (matchedAccount) {
      // Login successful, redirect to dashboard
      res.send(matchedAccount.redirectUrl);
    } else {
      // Login failed, return error message
      res.status(401).send('Invalid username or password');
    }
  });
  // Start server
const port = 3001;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});