// import React from 'react'
import axios from 'axios';
import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function AjoutCours() {
    const CloseRef = useRef();
    const navigate = useNavigate();
    const [cour, setCour] = useState({
        nom_cours: "",
        code: "",
        descrition: "",
        credit: "",
      });

      const handleSubmit =(e) =>{
        e.preventDefault();
        axios.post('http://localhost:8097/Add_cours', cour)
        .then(result => {
            if (result.data.Status) {
              navigate('/dashboard/cours');
              // fetchEnseignants();
            } else {
              // Gérer les erreurs si nécessaire
              alert(result.data.Error);
            }
          })
        .catch(err => console.log(err));
      }; 
  return (
    <>

    <div id="addEmployeeModal" className="modal fade">
        <div className="modal-dialog">
            <div className="modal-content">
                <form onSubmit={handleSubmit}>
                    <div className="modal-header">
                        <h4 className="modal-title">Ajout Cours</h4>
                        <button type="button" className="close" data-bs-dismiss="modal" aria-hidden="true" ref={CloseRef}>&times;</button>
                    </div>
                    <div className="modal-body">
                        <div className="form-group">
                            <label>Nom cours</label>
                            <input type="text"  name='nom_cours'  className="form-control" required onChange={(e) => setCour({ ...cour, nom_cours: e.target.value })}/>
                        </div>
                        <div className="form-group">
                            <label>Code </label>
                            <input type="text"  name='code'  className="form-control" required onChange={(e) => setCour({ ...cour, code: e.target.value })}/>
                        </div>
                        <div className="form-group">
                            <label>Description</label>
                            <input type="text"  name='descrition'  className="form-control" required onChange={(e) => setCour({ ...cour, descrition: e.target.value })}/>

                        </div>
                        <div className="form-group">
                            <label>Credit</label>
                            <input type="number"  name='credit'  className="form-control" required onChange={(e) => setCour({ ...cour, credit: e.target.value })}/>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <input type="button" className="btn btn-default" data-bs-dismiss="modal" value="Cancel" />
                        <input type="submit" className="btn btn-primary" value="Add" data-bs-dismiss="modal"/>
                    </div>

                </form>
            </div>
        </div>
    </div>



</>
  )
}

export default AjoutCours