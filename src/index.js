import express from "express";

const app = express(); // Create an Express application

const PORT = process.env.PORT;

const mockUsers = [
  { id: 1, username: "anson", displayname: "Anson" },
  { id: 2, username: "jack", displayname: "Jack" },
  { id: 3, username: "noa", displayname: "Noa" },
];

// Routes / Enpoints
// Define a basic route
app.get("/", (req, res) => {
  res.status(201).send("Hello world");
});

app.get("/api/users", (req, res) => {
  console.log(req.query);
  const {
    query: { filter, value },
  } = req;

  if (!filter && !value) res.json(mockUsers);

  if (filter && value)
    res.json(mockUsers.filter((user) => user[filter].includes(value)));
});

app.get("/api/users/:id", (req, res) => {
  const parsedId = parseInt(req.params.id);

  if (isNaN(parsedId)) {
    return res.status(400).json({ error: "Invalid user ID" });
  }
  const user = mockUsers.find((user) => user.id === parsedId);

  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  res.status(200).json(user);
});

app.get("/api/products", (req, res) => {
  res.status(200).json([{ id: 1, name: "Chicke leg", price: 1.2 }]);
});

// Query params

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
