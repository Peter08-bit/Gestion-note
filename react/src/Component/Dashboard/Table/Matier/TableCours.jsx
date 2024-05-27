import axios from "axios";
import { useEffect, useState } from "react";
import SupreCours from "./SupreCours";

function TableCours() {
    const [cour, setCour] = useState([]);
    const [selectCour, setSelectCour] = useState(null);
    const [deleteCours, setDeleteCours] = useState(null)

    useEffect(() => {
        fetchCours(); // Correction: Appeler fetchCours avec des parenthèses
    }, []);

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

    const handleModificationClick = (cours) => {
        setSelectCour(cours); // Correction: Utiliser setSelectCour
    };

    const handleChangeCours = (e) =>{
        setSelectCour({
            ...selectCour,
            [e.target.name]: e.target.value
        })
    }

    const handleModification= async()=>{
        try {
            const response= await axios.put(`http://localhost:8097/Edit_cours/${selectCour.id_cours}`,  selectCour)
            console.log(response.data);
            setSelectCour(null);
            fetchCours();
        } catch (error) {
            console.error('Erreur lors de la mise à jour du cours:', error);
        }
    };

    const handleSupressionCoursClick = (id) =>{
        setDeleteCours(id);
    };

    const handleSupreCours = async ()=>{
        try {
            await axios.delete(`http://localhost:8097/Delete_cours/${deleteCours}`);
            setDeleteCours(null);
            fetchCours();
            console.log("coucou")
        } catch (error) {
            console.log('Erreur lors de la suppression du Cours:', error);
        }
    };

    return (
        <>
            <div className="container">
                <div className="table-wrapper">
                    <div className="table-title">
                        <div className="row">
                            <div className="col-sm-6">
                                <h2>Liste <b>Cours</b></h2>
                            </div>
                            <div className="col-sm-6">
                                <a href="#" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#addEmployeeModal">
                                    <i className="bi bi-plus-circle"></i> <span>Ajout Etudiant</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <table className="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th>Nom cours</th>
                                <th>Code</th>
                                <th>Description</th>
                                <th>Credit</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cour.map(cours => (
                                <tr key={cours.id_cours}>
                                    <td>{cours.nom_cours}</td>
                                    <td>{cours.code}</td>
                                    <td>{cours.descrition}</td>
                                    <td>{cours.credit}</td>
                                    <td>
                                        <a href="#" className="edit cursor-pointer p-2" data-bs-toggle="modal" data-bs-target="#editEmployeeModal" onClick={() => handleModificationClick(cours)}>
                                            <i className="bi bi-pen text-warning" data-bs-toggle="tooltip" title="Edit"></i>
                                        </a>
                                        <a href="#" className="delete cursor-pointer p-2" data-bs-toggle="modal" data-bs-target="#deleteEmployeeModal" onClick={() => handleSupressionCoursClick(cours.id_cours)}>
                                            <i className="bi bi-trash3 text-danger" data-bs-toggle="tooltip" title="delete" ></i>
                                        </a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <SupreCours handleSupreCours={handleSupreCours}/>
                
                {selectCour &&(
                <div id="editEmployeeModal" className="modal fade show" style={{ display: 'block' }}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <form>
                                <div className="modal-header justify-content-center align-items-center">
                                    <h4 className="modal-title">Modifier Enseignant</h4>
                                    <button type="button" className="close" onClick={() => setSelectCour(null)}>&times;</button>
                                </div>
                                <div className="modal-body">
                                    <div className="form-group">
                                        <label>Nom</label>
                                        <input type="text" name='nom_cours' value={selectCour.nom_cours} onChange={handleChangeCours} className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label>Code</label>
                                        <input type="text" name='code' value={selectCour.code} onChange={handleChangeCours} className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label>Description</label>
                                        <input type="text" name='descrition' value={selectCour.descrition} onChange={handleChangeCours} className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label>Credit</label>
                                        <input type="text" name='credit' value={selectCour.credit} onChange={handleChangeCours} className="form-control" />
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-default" onClick={() => setSelectCour(null)}>Cancel</button>
                                    <button type="button" className="btn btn-primary " onClick={handleModification}>Modifier</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                )}
            </div >
        </>
    )
}

export default TableCours;
