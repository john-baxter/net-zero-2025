import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import CompletedMilestones from "./CompletedMilestones";
import Milestones from "./Milestones";
import ProgressBar from "./ProgressBar";
import { MDBContainer, MDBRow } from "mdb-react-ui-kit";

const RoadmapContainer = (props) => {
  const { dictionary } = props;
  const [error, setError] = useState(null);
  const [completedMilestones, setCompletedMilestones] = useState([]);
  const [incompleteMilestones, setIncompleteMilestones] = useState([]);

  useEffect(() => {

    axios
      .get("https://fierce-inlet-05264.herokuapp.com/api/milestones", {
        params: { "filters[is_complete][$eq]": true, sort: "goal_date"},
      })
      .then(({ data: { data: res }}) => {
          setCompletedMilestones(res);
      })
      .catch((error) => setError(error));

    axios
      .get("https://fierce-inlet-05264.herokuapp.com/api/milestones", {
        params: { "filters[is_complete][$eq]": false, sort: "goal_date"},
      })
      .then(({ data: { data: res }}) => setIncompleteMilestones(res))
      .catch((error) => setError(error));
  }, []);

  if (error) {
    // Print errors if any
    return <div>An error occured: {error.message}</div>;
  }

  // Get lengths
  const completeAmount = completedMilestones.length;
  const incompleteAmount = incompleteMilestones.length;

  return (
    <>
      <MDBContainer>
        <MDBRow className="d-flex justify-content-center">
          <CompletedMilestones milestones={completedMilestones} dictionary={dictionary} />
          <Milestones milestones={incompleteMilestones} dictionary={dictionary} />
        </MDBRow>  
        <ProgressBar 
        completeAmount={completeAmount}
        incompleteAmount={incompleteAmount}
        />
      </MDBContainer>
    </>
  );
};

export default RoadmapContainer;
