import React from 'react'
import { MDBProgress, MDBProgressBar } from 'mdb-react-ui-kit';

const ProgressBar = (props) => {

const { completeAmount, incompleteAmount} = props;
const totalMilestones = completeAmount + incompleteAmount;
const percentComplete = (completeAmount / totalMilestones) * 100;

  return (
    <MDBProgress className="prog-bar rounded-5" height='40'>
      <MDBProgressBar  bgColor='secondary' width={percentComplete} valuemin={0} valuemax={100} >
      <span className="fw-bold">{completeAmount} of {totalMilestones} milestones achieved</span>
      </MDBProgressBar>
    </MDBProgress>
  )
}

export default ProgressBar