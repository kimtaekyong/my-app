const express = require("express");
const app = express();
const port = 1000;

// Middleware to parse JSON bodies
app.use(express.json());

// Sample data
const items = [
  { id: 1, name: "Item 1", description: "This is item 1" },
  { id: 2, name: "Item 2", description: "This is item 2" },
  { id: 3, name: "Item 3", description: "This is item 3" },
];

// GET endpoint to retrieve all items
app.get("/api/items", (req, res) => {
  res.json(items);
});

// GET endpoint to retrieve a single item by ID
app.get("/api/items/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);
  const item = items.find((i) => i.id === id);
  if (item) {
    res.json(item);
  } else {
    res.status(404).send("Item not found");
  }
});

// POST endpoint to create a new item
app.post("/api/items", (req, res) => {
  const newItem = req.body;
  newItem.id = items.length ? items[items.length - 1].id + 1 : 1;
  items.push(newItem);
  res.status(201).json(newItem);
});

// PUT endpoint to update an existing item
app.put("/api/items/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);
  const index = items.findIndex((i) => i.id === id);
  if (index !== -1) {
    items[index] = { id, ...req.body };
    res.json(items[index]);
  } else {
    res.status(404).send("Item not found");
  }
});

// DELETE endpoint to delete an item by ID
app.delete("/api/items/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);
  const index = items.findIndex((i) => i.id === id);
  if (index !== -1) {
    items.splice(index, 1);
    res.status(204).send();
  } else {
    res.status(404).send("Item not found");
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
