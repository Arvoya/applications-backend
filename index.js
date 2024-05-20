require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const {
  readApplications,
  postApplication,
  deleteApplication,
  updateApplication,
} = require("./handlers");

const app = express();

app.use(cors());

app.use(express.json());

const PORT = process.env.PORT;

mongoose.connect(process.env.MONGODB_CONN);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => console.log("Mongoose is connected"));

app.get("/applications", readApplications);
app.post("/applications", postApplication);
app.delete("/applications/:id", deleteApplication);
app.put("/applications/:id", updateApplication);

app.listen(PORT, () => console.log(`listening on ${PORT}`));
