// import React from 'react'$
import TableCourts from './TableCours'
// import EditCourts from './EditCours'
import AjoutCours from './AjoutCours'
import SupreCours from './SupreCours'


// bootstrap
// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
// import Header from '../../Header/Header'
// import Side from '../../Side'

function Cours() {
  return (
<>
    {/* <Header/>
    <Side/> */}
    <TableCourts/>
    {/* <EditCourts/> */}
    <AjoutCours/>
    <SupreCours/>
</>
  )
}

export default Cours