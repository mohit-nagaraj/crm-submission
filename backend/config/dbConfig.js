import mongoose from "mongoose";

async function connectToDatabase() {
  try {
    const uri = process.env.MONGODB_URI;
    // Connect to the database
    await mongoose.connect(uri);

    console.log("Connected to the database");
  } catch (error) {
    console.error("Error connecting to the database", error);
    throw error;
  }
}

export default connectToDatabase;
