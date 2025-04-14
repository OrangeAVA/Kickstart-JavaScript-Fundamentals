// routes/itemRoutes.js
const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');

// List all items
router.get('/', itemController.getAllItems);

// Render form to add a new item
router.get('/add', itemController.renderAddItemForm);

// Add a new item
router.post('/add', itemController.addItem);

// Render form to edit an item
router.get('/edit/:id', itemController.renderEditItemForm);

// Update an item
router.post('/update', itemController.updateItem);

// Delete an item
router.get('/delete/:id', itemController.deleteItem);

module.exports = router;
