import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config(); 

const connection = {};

export const connectToDB = async () => {
  try {
    if (connection.isConnected) return;
    const db = await mongoose.connect(process.env.MONGO);
    connection.isConnected = db.connections[0].readyState;
    console.log('Connected to MongoDB');
  } catch (error) {
    console.log(error)
    throw new Error(error);
  }
};
