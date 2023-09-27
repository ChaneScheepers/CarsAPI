import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function UpdateCar() {
  const { id } = useParams();
  const [owner, setOwner] = useState();
  const [model, setModel] = useState();
  const [registration, setRegistration] = useState();
  const [address, setAddress] = useState();
  const [make, setMake] = useState();
  const navigate = useNavigate();

  //Displays data for edit.
  useEffect(() => {
    axios
      .get("http://localhost:4000/getCar/" + id)
      .then((result) => {
        console.log(result);
        setOwner(result.data.owner);
        setModel(result.data.model);
        setRegistration(result.data.registration);
        setAddress(result.data.address);
        setMake(result.data.make);
      })
      .catch((err) => console.log(err));
  }, []);

  //function to update data.
  const Update = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:4000/update/" + id, {
        owner,
        model,
        registration,
        address,
        make,
      })
      .then((result) => {
        console.log(result);
        navigate("/"); //moves you back to homepage
      })
      .catch((err) => console.log(err));
  };
  //The below code is simular to the createPage, the only diff is the function for updating above. The form also displays the current ID information for userFriendlyness.
  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={Update}>
          <h2>Edit Car Details</h2>
          <div className="mb-2">
            <label htmlFor="">Owner</label>
            <input
              type="text"
              placeholder="Owner Details"
              className="form-control"
              value={owner}
              onChange={(e) => setOwner(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Address</label>
            <input
              type="text"
              placeholder="Address Details"
              className="form-control"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Registration Number</label>
            <input
              type="text"
              placeholder="Registration Number"
              className="form-control"
              value={registration}
              onChange={(e) => setRegistration(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Model</label>
            <input
              type="number"
              placeholder="Model"
              className="form-control"
              value={model}
              onChange={(e) => setModel(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Make</label>
            <input
              type="text"
              placeholder="Car Make"
              className="form-control"
              value={make}
              onChange={(e) => setMake(e.target.value)}
            />
          </div>
          <button className="btn btn-success">Update</button>
        </form>
      </div>
    </div>
  );
}

export default UpdateCar;
