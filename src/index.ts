import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

console.log("✅ Environment Variables Loaded");
console.log("MONGO_URI:", process.env.MONGO_URI || "❌ Undefined!");

// Check if MONGO_URI is available
if (!process.env.MONGO_URI) {
  throw new Error("❌ MONGO_URI is undefined! Check your .env file.");
}

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON
app.use(express.json());

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI as string)
  .then(() => console.log("✅ MongoDB connected successfully!"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});







