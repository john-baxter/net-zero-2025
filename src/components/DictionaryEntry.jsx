import React from "react";
import { MDBCollapse, MDBBtn } from "mdb-react-ui-kit";
import { useState } from "react";

const DictionaryEntry = (props) => {

  const [showShow, setShowShow] = useState(false)

  const toggleShow = () => setShowShow(!showShow);  
  
  const { id, term, definition } = props;
  return (
    <div className="m-2" key={id}>
      <MDBBtn color='secondary'
        style={{ width: 250 + "px", height: 50 + "px" }}
        tag="a"
        onClick={toggleShow}
        className=''
      >
        {term}
      </MDBBtn>
      <MDBCollapse className="px-2" style={{ width: 250 + "px"}}show={showShow}>{definition} </MDBCollapse>
    </div>
  );
};

export default DictionaryEntry;
