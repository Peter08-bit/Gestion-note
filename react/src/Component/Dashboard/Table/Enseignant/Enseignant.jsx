// import React from 'react'
// import axios from 'axios'
// import { useParams } from 'react-router-dom'
// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
// table
import TableEnseignant from './TableEnseignant'
import Ajout from './Ajout'
// import Edit from './Edit'
import Delete from './Delete'
// import { useState } from 'react'

// import { Toaster } from 'react-hot-toast'

function Enseignant() {
    // 


    // const Update=(id)=>{
    //     setUpdate(id)
    // }
    
    return (

        <>
            
            <div className="card">
                <div className="card-body">
                    <TableEnseignant/>
                    <Ajout />
                    {/* <Edit/> */}
                    <Delete />
                </div>
            </div>

        </>
    )
}

export default Enseignant