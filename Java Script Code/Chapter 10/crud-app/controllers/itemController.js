// controllers/itemController.js
const itemModel = require('../models/itemModel');

// Display all items
exports.getAllItems = (req, res) => {
    const items = itemModel.getAllItems();
    res.render('index', { items });
};

// Render form to add a new item
exports.renderAddItemForm = (req, res) => {
    res.render('addItem');
};

// Add a new item
exports.addItem = (req, res) => {
    const newItem = {
        id: Date.now().toString(),
        name: req.body.name,
        description: req.body.description
    };
    itemModel.addItem(newItem);
    res.redirect('/');
};

// Render form to edit an item
exports.renderEditItemForm = (req, res) => {
    const item = itemModel.getItemById(req.params.id);
    res.render('editItem', { item });
};

// Update an existing item
exports.updateItem = (req, res) => {
    const updatedItem = {
        id: req.body.id,
        name: req.body.name,
        description: req.body.description
    };
    itemModel.updateItem(req.body.id, updatedItem);
    res.redirect('/');
};

// Delete an item
exports.deleteItem = (req, res) => {
    itemModel.deleteItem(req.params.id);
    res.redirect('/');
};
