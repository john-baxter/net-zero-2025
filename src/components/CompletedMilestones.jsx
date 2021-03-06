import { MDBCard, MDBCardBody, MDBCol, MDBIcon, MDBCardTitle, MDBCardText, MDBTooltip } from "mdb-react-ui-kit";
import React from "react";

const CompletedMilestones = (props) => {
  const { milestones, dictionary } = props;
  const dictionary_map = new Map(dictionary.map(({term, definition}) => {
    return [term.toLowerCase(), definition]
  }));

  return (
    <>
      {milestones.map(({ id, attributes }) => (
        <MDBCol className="text-center" lg="3" md="6" sm="sm" key={id}>
          <MDBCard className="my-4 mx-auto" style={{ maxWidth: 250 + "px",  minHeight: 300 + 'px' }}>
            <div className="d-flex justify-content-center milestone-icon">
              <div className="p-3 bg-success rounded-circle shadow-5-strong d-inline-block">
                <MDBIcon icon="check" size="2x" className="text-white" />
              </div>
            </div>
            <MDBCardBody>
              <MDBCardTitle style={{ minHeight: 60 + 'px'}}>{attributes.title}</MDBCardTitle>
              <MDBCardText style={{ minHeight: 140 + 'px'}}>
                {attributes.description.split(" ").map( (word, index) => {
                  if (dictionary_map.has(word)){
                    return (
                      <MDBTooltip key={index} tag='b' title={dictionary_map.get(word)}>{word + " "}</MDBTooltip>
                    )
                  }
                  else {
                    return word + " ";
                  }
                })}
              </MDBCardText>
              <MDBCardTitle>{new Date(attributes.goal_date).getFullYear()}</MDBCardTitle>
            <div className='mask rounded-3' style={{ backgroundColor: 'rgba(255, 255, 1255, 0.5)' }}></div>   </MDBCardBody>
          </MDBCard>
        </MDBCol>
      ))}
    </>
  );
};

export default CompletedMilestones;
