import mongoose from "mongoose";
import app from "./pratices.app";
const port = 3000;

const server = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/pratices-mongoss');
    app.listen(port, () => {
      console.log(`Listining port is: `, port);
    });
  } catch (err) {
    console.log("Faield", err)
  };
};
server()