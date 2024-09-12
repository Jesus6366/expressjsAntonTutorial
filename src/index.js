import express from "express";
import usersRouter from "./routes/users.js";

const app = express(); // Create an Express application

const PORT = process.env.PORT;

//middlewares
// parse json
app.use(express.json());
app.use(usersRouter);

const loggingMiddleware = (req, res, next) => {
  next();
};

app.use(loggingMiddleware);

// Routes / Enpoints
// Define a basic route
app.get("/", (req, res) => {
  res.status(201).send("Hello world");
});

app.get("/api/products", (req, res) => {
  res.status(200).json([{ id: 1, name: "Chicke leg", price: 1.2 }]);
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
