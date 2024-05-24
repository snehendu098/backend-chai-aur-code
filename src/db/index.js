import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    console.log("connection started");
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );

    console.log(`MongoDB connected: ${connectionInstance.connection.host}`);
  } catch (err) {
    console.log("MONGODB ERROR", err);
    process.exit(1);
  }
};

export default connectDB;
