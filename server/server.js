const dotenv = require('dotenv').config();
const express = require('express');
const app = express();
const connectDB = require('./config/db');
const packages = require("./routes/packages"); // Ensure this file exists and exports a router

const PORT = process.env.PORT || 5000;

// Connect to database
connectDB();

// Setup middlewares
app.use(express.json());

// Setup routes
app.use("/api/packages", packages);

// Start server
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
