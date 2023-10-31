//api code & install
const mongoose = require("mongoose");
const CarModel = require("../models/CarModels");

//Connect with Mongoose added access to be able to access from anywhere as requested.
mongoose.connect(
  "mongodb+srv://chanescheep:Chane@carcluster0.sdq4hgd.mongodb.net/"
);

//Get all
module.exports.find_cars = (req, res) => {
  CarModel.find({})
    .then((cars) => res.json(cars))
    .catch((err) => res.json(err));
};

// get specific by ID
module.exports.find_car = (req, res) => {
  const id = req.params.id;
  CarModel.findById({ _id: id })
    .then((cars) => res.json(cars))
    .catch((err) => res.json(err));
};

//Post - add new
module.exports.post_car = (req, res) => {
  CarModel.create(req.body)
    .then((cars) => res.json(cars))
    .catch((err) => res.json(err));
};

//Delete specific by ID
module.exports.del_car = (req, res) => {
  const id = req.params.id;
  CarModel.findByIdAndDelete({ _id: id })
    .then((cars) => res.json(cars))
    .catch((err) => res.json(err));
};

//Put - change spesific by ID
module.exports.edit_car = (req, res) => {
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
};

//Put - change spesific by ID
// module.exports.update_many = async (req, res) => {
//   const filter = req.params.filter;
//   const update = req.params.update;
//   const option = req.params.option;
//   console.log(filter);
//   console.log(update);
//   console.log(option);

//   await CarModel.updateMany({ filter: update }, { $set: { filter: option } })
//     .then((cars) => res.json(cars))
//     .catch((err) => res.json(err));
// };

// module.exports.update_many = async (req, res) => {
//   const filter = req.params.filter;
//   const filterTwo = req.params.filterTwo;
//   const update = req.params.update;
//   const option = req.params.option;

//   const myFilterQuery = { [filter]: update };
//   console.log(myFilterQuery);

//   const res2 = await CarModel.find(myFilterQuery);
//   console.log(JSON.stringify(res2, null, 2));

//   const changeValuesTo = { $set: { [filterTwo]: option } };
//   console.log(changeValuesTo);

//   await CarModel.updateMany(myFilterQuery, changeValuesTo)
//     .then((cars) => res.json(cars))
//     .catch((err) => res.json(err));
// };

module.exports.update_cars = async (req, res) => {
  console.log(req.body);
  console.log(req.query);
  
  const res2 = await CarModel.find(req.query);
  console.log(JSON.stringify(res2, null, 2));

  await CarModel.updateMany(req.query, { $set: req.body })
    .then((cars) => res.json(cars))
    .catch((err) => res.json(err));
};
