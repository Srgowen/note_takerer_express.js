// Dependencies
const express = require('express');

// Create an Express application
const app = express();

// Define the port for the server to listen on
const PORT = process.env.PORT || 3001;

// Serve static files from the 'public' folder
app.use(express.static('public'));

// Set up middleware for parsing incoming request bodies
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes - Import and use API and HTML routes
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

// Start the server and listen for incoming requests on the specified port
app.listen(PORT, () => {
  console.log(`Server available at http://localhost:${PORT}`);
});
