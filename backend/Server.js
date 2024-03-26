const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path'); // Import path module to work with file paths

const clientRoute = require('./route/client.route');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const app = express();
const port = 3000;

// Middleware to log requests
app.use((req, res, next) => {
  const ip = req.ip;
  const date = new Date().toISOString();
  const method = req.method;
  const url = req.url;
  const logFilePath = 'access.log';
  const status = res.statusCode;
  const logMessage = `[${date}] ${ip} ${method} ${status}:${port} ${url}\n`;
  
  fs.appendFile(logFilePath, logMessage, (err) => {
    if (err) {
      console.error('Error writing to log file:', err);
    }
  });
  console.log(logMessage);
  next();
});

// Serve static files from the frontend build directory
const frontendPath = path.join(__dirname, '..', 'frontend', 'build');
app.use(express.static(frontendPath));

// Define API routes
app.use('/api-Hfitness', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api/v1/', clientRoute);

// Define route for root path
app.get('/', (req, res) => {
  // Send the landing page from the frontend build directory
  res.sendFile(path.join(frontendPath, 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port : ${port}`);
});
