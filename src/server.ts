
import mongoose from "mongoose";
import app from "./app";
const port: number = 3000

// Database connection
async function server() {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/pratices-mongoss');
    app.listen(port, () => {
      console.log(`Databasi listening on port ${port}`)
    })
  } catch (err) {
    console.log(`faild to database`, err)
  }
}
server()

