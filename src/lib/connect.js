import mongoose from "mongoose";

const connection = {};

export const dbConnect = async () => {
  try {
    if (connection.isConnected) {
      console.log("Using existing connection");
      return;
    }
    const db = await mongoose.connect(process.env.DB_URL);
    connection.isConnected = db.connections[0].readyState;
  } catch (err) {
    console.log(err);
    throw new Error("Error in connecting to database");
  }
};
