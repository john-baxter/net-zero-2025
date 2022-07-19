import { MDBCard, MDBCardBody, MDBCol, MDBIcon, MDBCardTitle, MDBCardText } from "mdb-react-ui-kit";
import React from 'react';

const Milestones = (props) => {
  const { milestones } = props;

  return (
    <>
      {milestones.map(({ id, attributes }) => (
        <MDBCol className="text-center" lg="3" md="6" sm="sm" key={id}>
          <MDBCard className="my-4 mx-auto" style={{ maxWidth: 250 + "px",  minHeight: 300 + 'px' }}>
            <div className="d-flex justify-content-center milestone-icon">
              <div className="p-3 bg-danger rounded-circle shadow-5-strong d-inline-block">
                <MDBIcon icon="leaf" size="2x" className="text-white" />
              </div>
            </div>
            <MDBCardBody>
              <MDBCardTitle style={{ minHeight: 100 + 'px'}}>{attributes.title}</MDBCardTitle>
              <MDBCardText>
                {attributes.description}
                
              </MDBCardText>
              <MDBCardTitle>{new Date(attributes.goal_date).getFullYear()}</MDBCardTitle>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      ))}
    </>
  );
};

export default Milestones;