import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Ajout() {
  const CloseRef = useRef();
  const [enseignant, setEnseignant] = useState({
    nom: "",
    prenom: "",
    email: "",
    password: "",
    specialisation: "",
  });
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8097/Enseignant', enseignant)
      .then(result => {
        if (result.data.Status) {
          navigate('/dashboard/enseignant');
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
                <h4 className="modal-title">Ajout Enseignant</h4>
                <button type="button" className="close" data-bs-dismiss="modal" aria-hidden="true" ref={CloseRef}>&times;</button>
              </div>
              <div className="modal-body">
                <div className="form-group">
                  <label>Nom</label>
                  <input type="text" name='nom' className="form-control" required onChange={(e) => setEnseignant({ ...enseignant, nom: e.target.value })} />
                </div>
                <div className="form-group">
                  <label>Prenom</label>
                  <input type="text" name='prenom' className="form-control" required onChange={(e) => setEnseignant({ ...enseignant, prenom: e.target.value })} />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" name='email' className="form-control" required onChange={(e) => setEnseignant({ ...enseignant, email: e.target.value })} />
                </div>
                <div className="form-group">
                  <label>Mot de pass</label>
                  <input type="password" name='password' className="form-control" required onChange={(e) => setEnseignant({ ...enseignant, password: e.target.value })} />
                </div>
                <div className="form-group">
                  <label>Specialisation</label>
                  <input type="text" name='specialisation' className="form-control" required onChange={(e) => setEnseignant({ ...enseignant, specialisation: e.target.value })} />
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
  );
}

export default Ajout;
