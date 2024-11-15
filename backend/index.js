import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectToDatabase from "./config/dbConfig.js";
import contactRouter from "./routes/contactRoutes.js";
import logger from "./utils/logger.js";

// Load environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Connect to the database
connectToDatabase();

// Logger middleware
app.use((req, res, next) => {
  logger.info(`${req.method} ${req.url}`);
  next();
});

// endpoint for health check
app.get("/health", (req, res) => {
  res.status(200).send("Server is running");
});

app.use("/api/v0/contact", contactRouter);

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
});
