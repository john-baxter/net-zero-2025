import React from "react";
import { useState } from "react";
import { MDBBtn, MDBContainer, MDBInput } from "mdb-react-ui-kit";

export default function CalcForm({addCarbonData}) {
  const [carbonData, setCarbonData] = useState({
    mpg: "",
    dist: "",
    trips: "",
  });

  const handleChange = (event) => {
    setCarbonData({ ...carbonData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addCarbonData(carbonData);
    setCarbonData({ mpg: "", dist: "", trips: "" });
  };

  return (
    <>
      <MDBContainer className="pt-5 text-center">
        <form  onSubmit={handleSubmit}>
        
          <MDBInput
            className="m-3"
            label="What is your car's MPG?"
            name="mpg"
            type="number"
            value={carbonData.mpg}
            onChange={handleChange}
            required={true}
          />
          <MDBInput
            className="m-3"
            label="What is the commute distance? (miles)"
            name="dist"
            type="number"
            value={carbonData.dist}
            onChange={handleChange}
            required={true}
          />
          <MDBInput
            className="m-3"
            label="How often is this trip per week?"
            name="trips"
            type="number"
            value={carbonData.trips}
            onChange={handleChange}
            required={true}
          />
          <MDBBtn color='secondary'>Calculatron</MDBBtn>
        </form>
      </MDBContainer>
    </>
  );
}
