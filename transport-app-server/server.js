require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./src/config/db");
const userRoutes = require("./src/routes/userRoutes");

const app = express();

// Connect Database
connectDB();

// Middleware
app.use(bodyParser.json());

// Routes
app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
