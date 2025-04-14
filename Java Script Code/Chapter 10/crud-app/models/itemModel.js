// models/itemModel.js
let items = [];

// Get all items
const getAllItems = () => items;

// Get item by ID
const getItemById = (id) => items.find(item => item.id === id);

// Add a new item
const addItem = (item) => {
    items.push(item);
};

// Update an existing item
const updateItem = (id, updatedItem) => {
    const index = items.findIndex(item => item.id === id);
    if (index !== -1) {
        items[index] = updatedItem;
    }
};

// Delete an item
const deleteItem = (id) => {
    items = items.filter(item => item.id !== id);
};

module.exports = {
    getAllItems,
    getItemById,
    addItem,
    updateItem,
    deleteItem
};