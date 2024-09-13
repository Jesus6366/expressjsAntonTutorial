import express from "express";
import usersRouter from "./routes/users.js";
import productsRouter from "./routes/products.js";

import cookieParser from "cookie-parser";

const app = express(); // Create an Express application

const PORT = process.env.PORT;

//middlewares
// parse json
app.use(cookieParser());
app.use(express.json());
app.use(usersRouter);
app.use(productsRouter);

const loggingMiddleware = (req, res, next) => {
  next();
};

app.use(loggingMiddleware);

// Routes / Enpoints
// Define a basic route
app.get("/", (req, res) => {
  res.cookie("hello", "world", { maxAge: 60000 * 60 });
  res.status(201).json({ msg: "Hello world" });
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
