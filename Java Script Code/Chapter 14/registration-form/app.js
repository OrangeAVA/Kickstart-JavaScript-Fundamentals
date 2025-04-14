const express = require('express');
const { MongoClient } = require('mongodb');
const path = require('path');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());
// Middleware to parse JSON and URL-encoded form data

app.use(express.urlencoded({ extended: true }));  // For form-urlencoded bodies

// Serve static HTML files
app.use(express.static(path.join(__dirname, 'views')));

// MongoDB connection URI
const uri = "mongodb://localhost:27017"; // Replace with your MongoDB URI
const client = new MongoClient(uri);

// Serve the index.html on the root route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// POST endpoint to register a user
app.post('/register', async (req, res) => {
  const user = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  };

  console.log('Received user data:', user);
   try {
    await client.connect(); // Connect to MongoDB
    const database = client.db('testdb'); // Replace with your database name
    const usersCollection = database.collection('users'); // Replace with your collection name
    const result = await usersCollection.insertOne(user); // Insert the user
    res.status(201).send(`User registered successfully: ${result.insertedId}`);
  } catch (err) {
    console.error("Error registering user:", err);
    res.status(500).send('Error registering user');
  } finally {
    await client.close(); // Close the MongoDB connection
  }
});

// READ: Get all registered users
app.get('/users', async (req, res) => {
    try {
      await client.connect();
      const database = client.db('testdb'); // Replace with your database name
      const usersCollection = database.collection('users'); 
      const users = await usersCollection.find().toArray();
      res.json(users);
    } catch (err) {
      console.error('Error fetching users:', err);
      res.status(500).send('Error fetching users');
    }finally {
      await client.close(); // Close the MongoDB connection
    }
  });
  
  
  // UPDATE: Update user information
  app.post('/update', async (req, res) => {
    const filter = { email: req.body.email };
    const update = { $set: { name: req.body.newName, password: req.body.newPassword } };
    try {
      await client.connect(); // Reconnect to MongoDB
    const database = client.db('testdb'); // Replace with your database name
    const usersCollection = database.collection('users'); // Replace with your collection name
      const result = await usersCollection.updateOne(filter, update);
      if (result.matchedCount > 0) {
        res.send(`User with email ${req.body.email} updated successfully`);
      } else {
        res.send('No user found with the provided email');
      }
    } catch (err) {
      console.error('Error updating user:', err);
      res.status(500).send('Error updating user');
    }finally {
      await client.close(); // Close the MongoDB connection
    }
  });
  
  // DELETE: Delete a user
  app.post('/delete', async (req, res) => {
    const filter = { email: req.body.email };
    try {
      await client.connect(); // Reconnect to MongoDB
      const database = client.db('testdb'); // Replace with your database name
      const usersCollection = database.collection('users'); // Replace with your collection name
      const result = await usersCollection.deleteOne(filter);
      if (result.deletedCount > 0) {
        res.send(`User with email ${req.body.email} deleted successfully`);
      } else {
        res.send('No user found with the provided email');
      }
    } catch (err) {
      console.error('Error deleting user:', err);
      res.status(500).send('Error deleting user');
    }finally {
      await client.close(); // Close the MongoDB connection
    }
  });
  
// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});