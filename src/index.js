import express from "express";

const app = express();

const PORT = process.env.PORT;

// routes / enpoints
app.get("/", (req, res) => {
  res.status(201).send("Hello world");
});

app.get("/api/users", (req, res) => {
  res.status(200).json([
    { id: 1, username: "anson", displayname: "Anson" },
    { id: 2, username: "jack", displayname: "Jack" },
  ]);
});

app.get("/api/products", (req, res) => {
  res.status(200).json([{ id: 1, name: "Chicke leg", price: 1.2 }]);
});

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
