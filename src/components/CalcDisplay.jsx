import React from "react";

export default function CalcDisplay({ carbonData }) {
    console.log(('b' + 'a' + + 'a' + 'a').toLowerCase())

  if (carbonData.length === 0) {
    return(
    <div className="text-center py-4">

 
    <div>
      <h6>Your Carbon Footprint is:</h6>
     <p></p>
    </div>
    <div>
      <h6>Your Carbon Footprint this trip is:</h6>
      <p></p>
    </div>
    <div>
      <h6>Your Carbon Footprint per week is:</h6>
      <p></p>
    </div>
    <div>
      <h6>Your Carbon Footprint per year is:</h6>
      <p></p>
    </div>
  </div>)
  }

  const mpg = carbonData[0].mpg;
  const dist = carbonData[0].dist;
  const trips = carbonData[0].trips;

  const calc4 = parseInt((8.8 / mpg) * 1000);
  const calc = parseInt((calc4 * dist) / 1000);
  const calc2 = parseInt(calc * trips);
  const calc3 = parseInt(calc2 * 52);


  return (
    <div className="text-center  py-4">

 
      <div>
        <h6>Your Carbon Footprint is:</h6>
        <p>{calc}g CO2e / mile</p>
      </div>
      <div>
        <h6>Your Carbon Footprint this trip is:</h6>
        <p>{calc2}kg CO2e</p>
      </div>
      <div>
        <h6>Your Carbon Footprint per week is:</h6>
        <p>{calc3}kg CO2e
</p>
      </div>
      <div>
        <h6>Your Carbon Footprint per year is:</h6>
        <p>{calc4}kg CO2e</p>
      </div>
    </div>
  );
}
