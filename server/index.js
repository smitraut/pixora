// Load environment variables from .env file
import dotenv from "dotenv";
dotenv.config();

// Import required modules
import express from "express";
import cors from "cors";
import connectDB from "./config/db.js"; // MongoDB connection function
import authRoutes from './routes/authRoutes.js';
import userRoutes from './routes/userRoutes.js';
import mediaRoutes from "./routes/mediaRoutes.js";
import errorHandler from "./middlewares/errorHandler.js";





// Create Express app instance
const app = express();

// Middlewares
app.use(cors()); // Enable cross-origin requests (for frontend/backend communication)
app.use(express.json()); // Parse incoming JSON payloads
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded data (form submissions)


// 3️⃣ Routes
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use("/api/media", mediaRoutes);

//Error middleware
app.use(errorHandler);

// Sample test route
app.get("/", (req, res) => {
  res.send("📡 Pixora backend is running...");
});

// Get port number from .env or use default
const PORT = process.env.PORT || 7007;

// 🧠 BEST PRACTICE:
// Only start server AFTER MongoDB is connected
const startServer = async () => {
  try {
    await connectDB(); // Attempt to connect MongoDB
    app.listen(PORT, () => {
      console.log(`🚀 Server running: http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("❌ Failed to start server:", err.message);
    process.exit(1); // Exit the app if DB connection fails
  }
};

startServer(); // Call the function to run everything
