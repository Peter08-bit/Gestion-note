// import React from 'react'
import './card.css'
import { useState } from "react";
import CardFilter from "./CardFilter";


function Card({ card }) {

  const [filter, setFilter] = useState('today');
  const handleFilterchange = filter => {
    setFilter(filter)
  }

  return (
    <div className="col-xxl-2 col-md-4" >
      <div className="card info-card sales-card">
        <CardFilter filterChange={handleFilterchange} />
        <div className="card-body">
          <h5 className="card-title"> {card.name} <span>| {filter} </span></h5>
          <div className="d-flex align-items-center">
            <div className="card-icon rounded-circle d-flex d-fle align-items-center  justify-content-center ">
              <i className={card.icon}></i>
            </div>
            <div className="ps-4">
              <h6>
                {card.name === 'Autoriser' ?
                  '' + (card.ammount ? card.ammount.toLocaleString('en-US') : '') :
                  (card.ammount ? card.ammount.toLocaleString('en-US') : '')
                }

              </h6>
              <span className={`${card.percentage > 0 ? 'text-success' : 'text-danger'
                } small  pt-1 fw-bold`}>
                {card.percentage > 0
                  ? card.percentage * 100 : -card.percentage * 100}
                %


              </span>
              <span className="text-muted small pt-2 ps-1">
                {card.percentage > 0 ? 'increase' : 'decrease'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

}

export default Card