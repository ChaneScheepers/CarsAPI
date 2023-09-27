//connect to mongoose
const mongoose = require("mongoose");

//create Schema for Cars
const CarSchema = new mongoose.Schema({
  owner: String,
  model: Number,
  address: String,
  registration: String,
  make: String,
});

//Export Schema
const CarModel = mongoose.model("cars", CarSchema);
module.exports = CarModel;
