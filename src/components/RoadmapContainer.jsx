import React from "react";
import CompletedMilestones from "./CompletedMilestones";
import Milestones from "./Milestones";
import ProgressBar from "./ProgressBar";

const RoadmapContainer = () => {
  return (
    <>
      <CompletedMilestones />
      <Milestones />
      <ProgressBar />
    </>
  );
};

export default RoadmapContainer;
