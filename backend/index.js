//api code & install
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const CarModel = require("./models/CarModels");
const PORT = 4000;

const app = express();
app.use(cors());
app.use(express.json());

//Connect with Mongoose added access to be able to access from anywhere as requested. 
mongoose.connect(
  "mongodb+srv://chanescheep:Chane@carcluster0.sdq4hgd.mongodb.net/"
);

//Get all
app.get("/", (req, res) => {
  CarModel.find({})
    .then((cars) => res.json(cars))
    .catch((err) => res.json(err));
});

// get specific by ID
app.get("/getCar/:id", (req, res) => {
  const id = req.params.id;
  CarModel.findById({ _id: id })
    .then((cars) => res.json(cars))
    .catch((err) => res.json(err));
});

//Post - add new
app.post("/createCar", (req, res) => {
  CarModel.create(req.body)
    .then((cars) => res.json(cars))
    .catch((err) => res.json(err));
});

//Delete specific by ID
app.delete("/deleteCar/:id", (req, res) => {
  const id = req.params.id;
  CarModel.findByIdAndDelete({ _id: id })
    .then((cars) => res.json(cars))
    .catch((err) => res.json(err));
});

//Put - change spesific by ID
app.put("/update/:id", (req, res) => {
  const id = req.params.id;
  CarModel.findByIdAndUpdate(
    { _id: id },
    {
      owner: req.body.owner,
      model: req.body.model,
      registration: req.body.registration,
      address: req.body.address,
      make: req.body.make,
    }
  )
    .then((cars) => res.json(cars))
    .catch((err) => res.json(err));
});

//Listen
app.listen(PORT, () => {
  console.log(`${PORT} is up and running!`);
});
