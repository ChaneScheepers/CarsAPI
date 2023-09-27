import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateCar() {
  //Hoos for json data
  const [owner, setOwner] = useState();
  const [model, setModel] = useState();
  const [registration, setRegistration] = useState();
  const [address, setAddress] = useState();
  const [make, setMake] = useState();
  const navigate = useNavigate();

  //function for submit button. The below adds new data via the post server.
  const Submit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/createCar", {
        owner,
        model,
        registration,
        address,
        make,
      })
      .then((result) => {
        console.log(result);
        navigate("/"); //takes you back to the homepage
      })
      .catch((err) => console.log(err));
  };
  //the below is a form for collecting user input, which is then saved to the database.
  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={Submit}>
          <h2>Add Car Details</h2>
          <div className="mb-2">
            <label htmlFor="">Owner</label>
            <input
              type="text"
              placeholder="Owner Details"
              className="form-control"
              onChange={(e) => setOwner(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Address</label>
            <input
              type="text"
              placeholder="Address Details"
              className="form-control"
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Registration Number</label>
            <input
              type="text"
              placeholder="Registration Number"
              className="form-control"
              onChange={(e) => setRegistration(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Model</label>
            <input
              type="number"
              placeholder="Registration Number"
              className="form-control"
              onChange={(e) => setModel(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Make</label>
            <input
              type="text"
              placeholder="Car Make"
              className="form-control"
              onChange={(e) => setMake(e.target.value)}
            />
          </div>
          <button className="btn btn-success">Add Details</button>
        </form>
      </div>
    </div>
  );
}

export default CreateCar;
