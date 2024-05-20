// Create a server-side endpoint to handle the file upload
const express = require('express');
const app = express();
const multer = require('multer');

const upload = multer({ dest: './uploads/' });

app.post('/upload', upload.single('file'), (req, res) => {
  // req.file contains the uploaded file
  // req.body contains the entire request body
  console.log(req.file);

  // Send a response back to the client indicating that the file was uploaded successfully
  res.send(`File uploaded successfully!`);
});

app.get('/files', (req, res) => {
  // Read the contents of the uploads directory
  fs.readdir('./uploads/', (err, files) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error reading uploads directory');
      return;
    }

    // Map the file names to an arrayof file objects
    const fileObjects = files.map((fileName) => {
      const filePath = './uploads/' + fileName;
      const fileStats = fs.statSync(filePath);
      return {
        name: fileName,
        size: fileStats.size,
        uploadDate: fileStats.birthtime,
      };
    });

    // Send the file objects as JSON
    res.json(fileObjects);
  });
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});