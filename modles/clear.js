require("dotenv").config();
const mongoose = require("mongoose");
const Application = require("./applications"); // adjust the path to your Note model

mongoose.connect(process.env.MONGODB_CONN);

async function clear() {
  try {
    await Application.deleteMany({});
    console.log("Applications cleared");
  } catch (err) {
    console.error(err);
  } finally {
    mongoose.disconnect();
  }
}

clear();
