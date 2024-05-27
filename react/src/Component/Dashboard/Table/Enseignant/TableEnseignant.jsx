import { useState, useEffect } from 'react';
import axios from 'axios';
// import Ajout from './Ajout';
import Delete from './Delete';

// import Delete from './Delete';

function TableEnseignant() {
    const [deleteId, setDeleteId] = useState(null);
    const [enseignants, setEnseignants] = useState([]);
    const [selectedEnseignant, setSelectedEnseignant] = useState(null); // Enseignant sélectionné pour modification

    useEffect(() => {
        fetchEnseignants();
    }, []);

    const fetchEnseignants = async () => {
        try {
            const response = await axios.get('http://localhost:8097/enseignant');
            if (response.data.Status) {
                setEnseignants(response.data.Result);
            } else {
                alert(response.data.Error);
            }
        } catch (error) {
            console.error('Erreur lors de la récupération des données:', error);
            alert('Une erreur s\'est produite lors de la récupération des données');
        }
    };

    const handleEditClick = (enseignant) => {
        setSelectedEnseignant(enseignant);
    };

    const handleInputChange = (e) => {
        setSelectedEnseignant({
            ...selectedEnseignant,
            [e.target.name]: e.target.value
        });
    };

    const handleUpdate = async () => {
        try {
            const response = await axios.put(`http://localhost:8097/Updat_Ense/${selectedEnseignant.id}`, selectedEnseignant);
            console.log(response.data);
            setSelectedEnseignant(null); // Réinitialiser l'enseignant sélectionné après la mise à jour
            fetchEnseignants(); // Rafraîchir la liste des enseignants après la mise à jour
        } catch (error) {
            console.error('Erreur lors de la mise à jour de l\'enseignant:', error);
            // Gérer les erreurs ici
        }
    };

    
    const handleDeleteClick = (id) => {
        setDeleteId(id);
    };

    const handleDeleteConfirm = async () => {
        try {
            await axios.delete(`http://localhost:8097/enseignant/${deleteId}`);
            setDeleteId(null); // Réinitialiser l'ID à supprimer après la suppression
            fetchEnseignants(); // Rafraîchir la liste des enseignants après la suppression
        } catch (error) {
            console.error('Erreur lors de la suppression de l\'enseignant:', error);
            // Gérer les erreurs ici
        }
    };

    return (
        <>
            <div className="container">
                <div className="table-wrapper">
                    <div className="table-title">
                        <div className="row">
                            <div className="col-sm-6">
                                <h3>Liste des <b> Enseignants</b></h3>
                            </div>
                            <div className="col-sm-6">
                                <a href="#" className='btn btn-outline-success border' data-bs-toggle="modal" data-bs-target="#addEmployeeModal">
                                    <i className="bi bi-plus-circle"></i>
                                    <span>Ajout Enseignant</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <table className='table table-striped table-hover'>
                    <thead>
                        <tr>
                            <th>Nom</th>
                            <th>Prénom</th>
                            <th>Email</th>
                            <th>Password</th>
                            <th>Spécialisation</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {enseignants.map(enseignant => (
                            <tr key={enseignant.id}>
                                <td>{enseignant.nom}</td>
                                <td>{enseignant.prenom}</td>
                                <td>{enseignant.email}</td>
                                <td>{enseignant.password}</td>
                                <td>{enseignant.specialisation}</td>
                                <td className="m-5">
                                
                                <a href="#" className='edit cursor-pointer text-success p-3' data-bs-toggle="modal" data-bs-target="#editEmployeeModal" onClick={() => handleEditClick(enseignant)}>
                                        <i className="bi bi-pen" data-bs-toggle="tooltip" title="Edit"></i>
                                    </a>
                                    {/* <button type="button" className='edit cursor-pointer text-success p-2' ><i className="bi bi-pen" ></i></button> */}
                                    {/* <Delete  /> */}
                                    <a href="#"  className="delete cursor-pointer text-danger p-3" data-bs-toggle="modal" data-bs-target="#deleteEmployeeModal" onClick={() => handleDeleteClick(enseignant.id)}>
                                        <i className="bi bi-trash3" data-bs-toggle="tooltip" title="delete"></i>Delete
                                    </a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Delete handleDeleteConfirm={handleDeleteConfirm} />

            {selectedEnseignant && (
                <div id="editEmployeeModal" className="modal fade show" style={{ display: 'block' }}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <form>
                                <div className="modal-header justify-content-center align-items-center">
                                    <h4 className="modal-title">Modifier Enseignant</h4>
                                    <button type="button" className="close" onClick={() => setSelectedEnseignant(null)}>&times;</button>
                                </div>
                                <div className="modal-body">
                                    <div className="form-group">
                                        <label>Nom</label>
                                        <input type="text" name='nom' value={selectedEnseignant.nom} onChange={handleInputChange} className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label>Prénom</label>
                                        <input type="text" name='prenom' value={selectedEnseignant.prenom} onChange={handleInputChange} className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input type="text" name='email' value={selectedEnseignant.email} onChange={handleInputChange} className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label>Password</label>
                                        <input type="text" name='password' value={selectedEnseignant.password} onChange={handleInputChange} className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label>Spécialisation</label>
                                        <input type="text" name='specialisation' value={selectedEnseignant.specialisation} onChange={handleInputChange} className="form-control" />
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-default" onClick={() => setSelectedEnseignant(null)}>Cancel</button>
                                    <button type="button" className="btn btn-primary " onClick={handleUpdate}>Modifier</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default TableEnseignant;
