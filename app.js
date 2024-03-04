const express = require('express');
const app = express();
const port = 3000;

// Set view engine to EJS
app.set('view engine', 'ejs');

// Sets default rout to Public folder
app.use(express.static("public"));

// Middleware for parsing URL-encoded bodies (for POST data)
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
  res.render('index', { message: 'Hello from EJS!' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});