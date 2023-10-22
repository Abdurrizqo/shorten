const mongoose = require("mongoose");
const { seeder } = require("../models/model");
require("dotenv").config();

async function connectToDB() {
  await mongoose
    .connect(process.env.DBURL, {
      useNewUrlParser: true,
    })
    .then(() => {
      console.log("Connected to MongoDB");
      seeder();
    })
    .catch((err) => {
      console.error("Error connecting to MongoDB:", err);
    });
}

module.exports = connectToDB;
