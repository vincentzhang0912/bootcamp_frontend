
//Create a folder day 20.
// Create a folder ‘public’ in it
// Copy ecomm website files to this ‘public’ folder
// Create a file names - server-allfiles.js
// Add the below code to it -
const http = require("http");
const fs = require("fs");
const path = require("path");
const staticRoot = path.join(__dirname, "public");
const server = http.createServer((req, res) => {
//join path
  const filePath = path.join(staticRoot, req.url);
  // Check if the requested file exists
  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      // File not found
      res.statusCode = 404;
      res.end("404 Not Found");
    }
// Read and serve the file
      fs.readFile(filePath, (err, data) => {
        if (err) {
          // Error reading the file
          res.statusCode = 500;
          res.end('Internal Server Error');
          } else {// File successfully read
          res.statusCode = 200;
          res.end(data);
        }
      });
    });
});


const port = 3000; // Change this to the desired port number
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
