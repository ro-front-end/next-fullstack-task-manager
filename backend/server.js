// Backend server
const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

const corsOptions = {
  origin: "https://next-fullstack-task-manager.vercel.app",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));

// Middleware
app.use(express.json());

// Routes
const tasksRoutes = require("./routes/tasks");
app.use("/api/tasks", tasksRoutes);

// Mongo url
const url = process.env.MONGODB_URI;

mongoose
  .connect(url)
  .then(() => {
    console.log("Connected to MongoDb");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB", error.message);
  });

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Servidor Express corriendo en el puerto ${PORT}`);
});

module.exports = app;
