// import React from 'react'

function CardFilter(filterChange) {
  return (
    <div className="filter">
        <a href="#" className="icon" data-bs-toggel="dropdown">
            <i className="bi bi-three-dots"></i>
        </a>
        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow" >
            <li className="dropdown-header text-start">
                <h6>Filtre</h6>
            </li>
            <li>
                <a href="" className="dropdwn-item" onClick={() => filterChange('this Month')}> 1er Session </a>
            </li>
            <li>
                <a href="" className="dropdwn-item" onClick={() => filterChange('This Year')}> 2em Session</a>
            </li>
        </ul>
    </div>
  )
}

export default CardFilter