// server.js
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const itemRoutes = require('./routes/itemRoutes');

const app = express();

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Static files (for CSS, images, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Use item routes
app.use('/', itemRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});