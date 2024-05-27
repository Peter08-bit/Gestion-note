// import React from 'react'
// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
// import
import AjoutEtu from './AjoutEtu'
// import EditEtu from './EditEtu'
import SupreEtu from './SupreEtu'
import TableEtu from './TableEtu'

function Etudiant() {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <AjoutEtu />
          {/* <EditEtu /> */}
          <SupreEtu />
          <TableEtu />
        </div>
      </div>

    </>
  )
}

export default Etudiant