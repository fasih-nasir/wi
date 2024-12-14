import React from 'react'
import { useLocation } from 'react-router'
import { useParams } from 'react-router-dom';
export default function Jobdetail() {
    const { jobId } = useParams();
    console.log(jobId);
    
  
    return (
    <div>
      <h1>Job Deatils</h1>
    </div>
  )
}
