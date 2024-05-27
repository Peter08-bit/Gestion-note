// import React from 'react' 
import { useState } from "react"

import ReportTable from "./ReportTable";
import CardFilter from "../CardFilter";


function Record() {
    const [filter, setFilter] = useState('Today');
    const handleFilterChange = filter => {
     setFilter(filter);   
    }
  return (
    <div className="card">
        <CardFilter filterChange = {handleFilterChange}/>
        <div className="card-body">
            <h5 className="card-title">
                Reports <span>/ {filter} </span>
            </h5>
            <ReportTable/>
        </div>
    </div>
  )
}

export default Record