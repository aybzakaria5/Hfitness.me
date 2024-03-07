// setting up the server
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const clientRoute = require('./route/client.route');
const dietRoute = require('./route/diet.route');
const exerciceRoute = require('./route/exercice.route');
// importing the noteRoute to give the path to the server
const app = express();
const port = 3500;

// allowing the requests from the origin (Cors)

// to parse the data coming from the request such as (req.body) POST, PUT, DELETE
app.use((req, res, next) => {
  const ip = req.ip; // Getting the IP address from the request object
  const date = new Date().toISOString(); // Getting the current date and time
  const method = req.method; // Getting the HTTP request method
  const url = req.url; // Getting the requested URL
  const logFilePath = 'access.log'; // Path to the log file
  const status = res.statusCode; // Getting the HTTP response status code
  const logMessage = `[${date}] ${ip} ${method} ${status}:${port} ${url}\n`; // Constructing the log message
  
  // Appending the log message to the file
  fs.appendFile(logFilePath, logMessage, (err) => {
    if (err) {
      console.error('Error writing to log file:', err);
    }
  });
  console.log(logMessage);
  // console.log(url); // Also logging the message to the console
  next(); // Call the next middleware in the stack
});

app.get('/', (req, res) => {
    // rendering the landing page later
  res.send("Server started .......................");
});
app.use(express.json());
app.use(cors());
// handeling the route for the noteRoute
app.use('/api/v1/', clientRoute);
app.use('/api/v1/', dietRoute);
app.use('/api/v1/', exerciceRoute);
app.listen(port, () => {
    console.log(`Server is running on port : ${port}`);
});
