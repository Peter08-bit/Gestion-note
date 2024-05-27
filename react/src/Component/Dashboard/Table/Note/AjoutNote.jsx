// import React from 'react'
import axios from 'axios';
import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function AjoutNote() {
    const CloseRef = useRef()
    const [student, setStudent] = useState([]);
    const [cour, setCour] = useState([]);
    const navigate = useNavigate()

    const [notes, setNote] = useState({
        note: "",
        id_cours_nom: "",
        id_etudiant_nom: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8097/Ajout_note', notes)
            .then(result => {
                if (result.data.Status) {
                    navigate('/dashboard/note');
                    alert('ajout Note avec success');
                    // fetchEnseignants();
                } else {
                    // Gérer les erreurs si nécessaire
                    alert(result.data.Error);
                }
            })
            .catch(err => console.log(err));
    };

    useEffect(() => {
        fetchCours(); // Correction: Appeler fetchCours avec des parenthèses
        fetchEtu();
    }, []);

    const fetchEtu = async () => {
        try {
            const response = await axios.get('http://localhost:8097/etudiant');
            if (response.data.Status) {
                setStudent(response.data.Result);
            } else {
                alert(response.data.Error);
            }
        } catch (error) {
            console.error('Erreur lors de la récupération des données:', error);
            alert('Une erreur s\'est produite lors de la récupération des données');

        }
    };

    const fetchCours = async () => {
        try {
            const response = await axios.get('http://localhost:8097/cours');
            if (response.data.Status) {
                setCour(response.data.Result);
            } else {
                alert(response.data.Error);
            }
        } catch (error) {
            console.error('Erreur lors de la récupération des données:', error);
            alert('Une erreur s\'est produite lors de la récupération des données');
        }
    };
    return (
        <>

            <div id="addEmployeeModal" className="modal fade">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form onSubmit={handleSubmit}>
                            <div className="modal-header">
                                <h4 className="modal-title bolder ">Ajout Note</h4>
                                <button type="button" className="close" data-bs-dismiss="modal" aria-hidden="true" ref={CloseRef}>&times;</button>
                            </div>
                            <div className="modal-body">
                                <div className="form-group">
                                    <label>Nom Etudiant </label>
                                    <select name="nom" id="id_etudant" className='form-select' onChange={(e) => setNote({ ...notes, id_etudiant_nom: e.target.value })}>
                                        {student.map((s) => {
                                            return <option key={s.id_etudant} value={s.nom}> {s.nom} </option>
                                        })}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Nom cours</label>
                                    <select name="nom" id="id_etudant" className='form-select' onChange={(e) => setNote({ ...notes, id_cours_nom: e.target.value })}>
                                        {cour.map((e) => {
                                            return <option key={e.id_cours} value={e.nom_cours}> {e.nom_cours} </option>
                                        })}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Note</label>
                                    <input type="text" name='description' className="form-control" required onChange={(e) => setNote({ ...notes, note: e.target.value })} />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <input type="button" className="btn btn-default" data-bs-dismiss="modal" value="Cancel" />
                                <input type="submit" className="btn btn-primary" data-bs-dismiss="modal" value="Add" />
                            </div>

                        </form>
                    </div>
                </div>
            </div>



        </>
    )
}

export default AjoutNote