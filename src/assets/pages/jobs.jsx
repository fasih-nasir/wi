import React from 'react'
import { Link } from 'react-router-dom'
export default function Jobs() {
  return (
    <div>
        <Link to={"/postjob"}>
      <button>Post A Job</button>
      </Link>
    </div>
  )
}
