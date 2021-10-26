const mongoose = require("mongoose");
const config = require("config");

const connect = async () => {
  try {
    await mongoose.connect(config.get("dbURI"));
    console.log("Database Server Connected!");
  } catch (err) {
    return console.log("Error with DB: ", err.message);
  }
};

module.exports = connect;
