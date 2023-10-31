//Home Page - Install
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Cars() {
  //State
  const [cars, setCars] = useState([]);
  const navigate = useNavigate();

  //display all data in database
  useEffect(() => {
    axios
      .get("http://localhost:4000")
      .then((result) => setCars(result.data))
      .catch((err) => console.log(err));
  }, []);

  //Delete function for button below (Deletes specific item via ID)
  const handleDelete = (id) => {
    axios
      .delete("http://localhost:4000/deleteCar/" + id)
      .then((result) => {
        console.log(result.data);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  // a button that shows the owners with a car that is older than 5 years.
  const olderThanFiveCars = () => {
    let test = cars.filter((car) => car.model < 2018);
    return test;
  };

  const updateMany = () => {
    let whatToChange = prompt(
      "Select data you would like to choose from - exp. owner, model, address, registration or make?."
    ).toLowerCase();
    let changedTo = prompt(
      "Enter the name or details you would like to select - exp if owner was selected, enter their name)"
    );
    let whatToEdit = prompt(
      "What data would you like to ammend - - exp. owner, model, address, registration or make?"
    ).toLowerCase();
    let ammendTo = prompt(
      "What would you like to change the data to?"
    );

    axios
      .put(`http://localhost:4000/update?${whatToChange}=${changedTo}`, {
        [whatToEdit]: ammendTo,
      })
      .then((result) => {
        console.log(result.data);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  /*uses bootstrap for basic styling
  I have been watching a few tutorials on CRUD and MERN, the one I followed as a basic guidelin was a codeALONG with Yousaf https://www.youtube.com/watch?v=enOsPhp2Z6Q 
  The below displays the data in a neat table. Adding a delete and edit button.
  The edit and add buttons will take you to a new page with a form. Used maping to reflect data.*/
  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <Link to="/create" className="btn btn-success">
          Add Car +{" "}
        </Link>
        <button className="btn btn-success" onClick={updateMany}>
          Update many
        </button>
        <table className="table">
          <thead>
            <tr>
              <th>Owner</th>
              <th>Model</th>
              <th>Address</th>
              <th>Registration</th>
              <th>Make</th>
            </tr>
          </thead>
          <tbody>
            {cars.map((car) => {
              return (
                <tr>
                  <td>{car.owner}</td>
                  <td>{car.model}</td>
                  <td>{car.address}</td>
                  <td>{car.registration}</td>
                  <td>{car.make}</td>
                  <td>
                    <Link to={`/update/${car._id}`} className="btn btn-success">
                      {" "}
                      Edit{" "}
                    </Link>
                    <button
                      className="btn btn-danger"
                      onClick={(e) => handleDelete(car._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {/* display cars older than 5 years. */}
        <div>
          <h2> Car Model's older than 2018 </h2>
          <table className="table">
            <thead>
              <tr>
                <th>Owner</th>
                <th>Model</th>
                <th>Address</th>
                <th>Registration</th>
                <th>Make</th>
              </tr>
            </thead>
            <tbody>
              {olderThanFiveCars().map((car) => {
                return (
                  <tr>
                    <td>{car.owner}</td>
                    <td>{car.model}</td>
                    <td>{car.address}</td>
                    <td>{car.registration}</td>
                    <td>{car.make}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Cars;
