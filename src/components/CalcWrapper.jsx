import React, { useState } from "react";
import CalcForm from "./CalcForm";
import CalcDisplay from "./CalcDisplay";
import { MDBContainer } from "mdb-react-ui-kit";

const CalcWrapper = () => {
  const [carbonData, updateCarbonData] = useState([]);
  const addCarbonData = (carbon) => {
    updateCarbonData([carbon]);
  };

  return (
    <>
      <MDBContainer style={{ maxWidth: 600 + "px" }} className="rounded shadow-4 mt-5">
       
          <CalcForm addCarbonData={addCarbonData} />
          <CalcDisplay carbonData={carbonData} />

      </MDBContainer>
    </>
  );
};

export default CalcWrapper;
