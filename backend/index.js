//api code & install
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const CarModel = require("./models/CarModels");
const PORT = 4000;

const carControllers = require("./controllers/carController");

const app = express();
app.use(cors());
app.use(express.json());

//Connect with Mongoose added access to be able to access from anywhere as requested.
mongoose.connect(
  "mongodb+srv://chanescheep:Chane@carcluster0.sdq4hgd.mongodb.net/"
);

//Get all
app.get("/", carControllers.find_cars);

// get specific by ID
app.get("/getCar/:id", carControllers.find_car);

//Post - add new
app.post("/createCar", carControllers.post_car);

//Delete specific by ID
app.delete("/deleteCar/:id", carControllers.del_car);

//Put - change spesific by ID
app.put("/update/:id", carControllers.edit_car);

//Put - change spesific by ID
// app.put("/update/:filter/:update/:filterTwo/:option", carControllers.update_many);

app.put("/update", carControllers.update_cars);
// body: update

//Listen
app.listen(PORT, () => {
  console.log(`${PORT} is up and running!`);
});
