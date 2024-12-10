const express = require("express");
const { connectDB } = require("./config/db");
const netWorthRoutes = require("./routes/netWorthRoutes");
const usersRoutes = require("./routes/user");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Connect to MongoDB
connectDB(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((err) => {
    console.error("Failed to connect to DB:", err);
    process.exit(1);
  });

// CORS for cross-origin allowance
const corsOptions = {
  origin: "http://localhost:5173", // Update as needed for production
  credentials: true, // Access-Control-Allow-Credentials
  optionsSuccessStatus: 200,
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json());

// Routes for API
app.use("/api", netWorthRoutes);
app.use("/v1", usersRoutes);

// Default route
app.get("/", (req, res) => {
  res.send("Server is running well!");
});

// Export app for testing or importing
module.exports = app;

// Start server only if this module is the main entry point
if (require.main === module) {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}
