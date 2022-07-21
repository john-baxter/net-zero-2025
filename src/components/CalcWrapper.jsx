import React, { useState } from "react";
import CalcForm from "./CalcForm";
import CalcDisplay from "./CalcDisplay";
import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";

const CalcWrapper = () => {
  const [carbonData, updateCarbonData] = useState([]);
  const addCarbonData = (carbon) => {
    updateCarbonData([carbon]);
  };

  return (
    <>
      <MDBContainer className="rounded shadow-5 mt-5 py-3">
  
        <h5>Carbon Footprint Calculator</h5>
   

            <CalcForm addCarbonData={addCarbonData} />
     
   
    
            <CalcDisplay carbonData={carbonData} />
     
 
      </MDBContainer>
    </>
  );
};

export default CalcWrapper;
