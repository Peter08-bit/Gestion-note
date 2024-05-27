// import React from 'react'
import axios from 'axios';
import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';


function AjoutEtu() {
    const CloseRef = useRef()
    const [etudiant, setEtudiant] = useState({
        nom:"",
        prenom:"",
        date_naissance:"",
        email:"",
        adress:""
    });
    const navigate = useNavigate()

    const handleSubmit = (e) =>{
        e.preventDefault();
        axios.post('http://localhost:8097/ajout_etudiant', etudiant)
        .then(result => {
          if (result.data.Status) {
            navigate('/dashboard/etudiant');
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
                        <h4 className="modal-title">Ajout Etudiant</h4>
                        <button type="button" className="close" data-bs-dismiss="modal" aria-hidden="true" ref={CloseRef}>&times;</button>
                    </div>
                    <div className="modal-body">
                        <div className="form-group">
                            <label>Nom</label>
                            <input type="text"  name='nom'  className="form-control" required onChange={(e) => setEtudiant({ ...etudiant, nom: e.target.value })} />
                        </div>
                        <div className="form-group">
                            <label>Prenom </label>
                            <input type="text"  name='prenom'  className="form-control" required onChange={(e) => setEtudiant({ ...etudiant, prenom: e.target.value })} />
                        </div>
                        <div className="form-group">
                            <label>Date de Naissance</label>
                            <input type="date"  name='date_naissance'  className="form-control" required onChange={(e) => setEtudiant({ ...etudiant, date_naissance: e.target.value })} />

                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email"  name='email'  className="form-control" required onChange={(e) => setEtudiant({ ...etudiant, email: e.target.value })} />
                        </div>
                        <div className="form-group">
                            <label>Adress</label>
                            <input type="text"  name='adress'  className="form-control" required onChange={(e) => setEtudiant({ ...etudiant, adress: e.target.value })} />
                        </div>
                    </div>
                    <div className="modal-footer">
                        <input type="button" className="btn btn-default" data-bs-dismiss="modal" value="Cancel" />
                        <input type="submit" className="btn btn-primary" value="Add" data-bs-dismiss="modal" />
                    </div>

                </form>
            </div>
        </div>
    </div>



</>
  )
}

export default AjoutEtu

