// app.js

const express = require('express');
const app = express();
const port = 3000;

// Define a route
app.get('/', (req, res) => {
    // Assuming app.js is in the root directory, you can specify the correct path
    res.sendFile(__dirname + '/app.js');
  });

// Start the server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});

// Middleware to log requests
app.use((req, res, next) => {
    console.log(`Request received: ${req.method} ${req.url}`);
    next();
  });
  
  // Route with parameters
  app.get('/greet/:name', (req, res) => {
    const { name } = req.params;
    res.send(`Hello, ${name}!`);
  });
  
  // Error handling middleware
  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
  });