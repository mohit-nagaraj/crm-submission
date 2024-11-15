import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectToDatabase from "./config/dbConfig.js";

// Load environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Connect to the database
connectToDatabase();

// endpoint for health check
app.get("/health", (req, res) => {
  res.status(200).send("Server is running");
});

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
});
