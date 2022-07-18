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

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos", {
        params: { _limit: 4, offset: 0, completed: true },
      })
      .then(({ data }) => setCompletedMilestones(data))
      .catch((error) => setError(error));
  }, []);

  if (error) {
    // Print errors if any
    return <div>An error occured: {error.message}</div>;
  }

  return (
    <>
      <MDBContainer>
        <MDBRow className="d-flex justify-content-center">
          <CompletedMilestones milestones={completedMilestones} />
          <Milestones />
        </MDBRow>  
        <ProgressBar />
      </MDBContainer>
    </>
  );
};

export default RoadmapContainer;
