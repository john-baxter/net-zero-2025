import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import CompletedMilestones from "./CompletedMilestones";
import Milestones from "./Milestones";
import ProgressBar from "./ProgressBar";
import { MDBContainer, MDBRow } from "mdb-react-ui-kit";

const RoadmapContainer = () => {
  const [error, setError] = useState(null);
  const [completedMilestones, setCompletedMilestones] = useState([]);
  const [incompleteMilestones, setIncompleteMilestones] = useState([]);

  useEffect(() => {
    
    axios
      .get("https://jsonplaceholder.typicode.com/todos", {
        params: { _limit: 2, offset: 0, completed: true },
      })
      .then(({ data }) => setCompletedMilestones(data))
      .catch((error) => setError(error));

    axios
      .get("https://jsonplaceholder.typicode.com/todos", {
        params: {_limit: 2, offset: 0, completed: false },
      })
      .then(({ data }) => setIncompleteMilestones(data))
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
          <CompletedMilestones milestones={completedMilestones} />
          <Milestones milestones={incompleteMilestones}/>
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
