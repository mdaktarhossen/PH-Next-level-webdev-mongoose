import mongoose from "mongoose";
import { APP } from "./app";
const PORT = 3000;

// Database connection;
const server = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/practice-mongoose")
    APP.listen(PORT, () => console.log(`Server is running at ${PORT}`))
  }
  catch (err) { console.log(err) }
};
server();