import axios from "axios";
import { useEffect, useState } from "react"
import SupreNote from "./SupreNote";

function TableNote() {

    const [notes, setNotes] = useState([]);
    const [changeNote, setChangNote] = useState(null);
    const [suppressionNote, setSupressionNote]= useState(null);

    useEffect(() => {
        fetchNote();
    }, []);

    // Affichage des données
    const fetchNote = async () => {
        try {
            const response = await axios.get('http://localhost:8097/Note');
            if (response.data.Status) {
                setNotes(response.data.Result);
            } else {
                alert(response.data.Error);
            }
        } catch (error) {
            console.error('Erreur lors de la récupération des données:', error);
            alert('Une erreur s\'est produite lors de la récupération des données');
        }
    };

    const handleChangeClick = (note) => {
        setChangNote(note);
    }

    const handleChangeValue = (n) => {
        setChangNote({
            ...changeNote,
            [n.target.name]: n.target.value
        });
    };

    const handleChangeSave = async () => {
        try {
            const response = await axios.put(`http://localhost:8097/Update_note/${changeNote.id}`, changeNote);
            console.log(response.data);
            alert('Note mise à jour avec succès')
            setChangNote(null); // Réinitialiser l'enseignant sélectionné après la mise à jour
            fetchNote(); // Rafraîchir la liste des enseignants après la mise à jour
        } catch (error) {
            console.error('Erreur lors de la mise à jour de note:', error);
            // Gérer les erreurs ici
        }
    };

    const handleSupressionClick = (id) => {
        setSupressionNote(id);
    };

    const handleSupreNote = async () => {
        try {
            await axios.delete(`http://localhost:8097/Delete_note/${suppressionNote}`);
            setSupressionNote(null); // Réinitialiser l'ID à supprimer après la suppression
            fetchNote(); // Rafraîchir la liste des enseignants après la suppression
            alert('supression Note avec success');
        } catch (error) {
            console.error('Erreur lors de la suppression de l\'enseignant:', error);
            alert('Eurreur de supression')
            // Gérer les erreurs ici
        }
    };




    return (
        <>
            <div className="container">
                <div className="table-wrapper">
                    <div className="table-title">
                        <div className="row">
                            <div className="col-sm-6 ">
                                <h2>Liste <b className="text-danger">Note</b></h2>
                            </div>
                            <div className="col-sm-6">
                                <a href="#" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#addEmployeeModal">
                                    <i className="bi bi-plus-circle"></i> <span>Ajout Note</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <table className="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th>Nom Etudiant</th>
                                <th>Nom Cours</th>
                                <th>Note</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {notes.map(note => (
                                <tr key={note.id}>
                                    <td>{note.id_etudiant_nom}</td>
                                    <td>{note.id_cours_nom}</td>
                                    <td>{note.note}</td>
                                    <td className="m-5">
                                        <a href="#" className="edit cursor-pointer p-2" data-bs-toggle="modal" data-bs-target="#editEmployeeModal" onClick={() => handleChangeClick(note)}>
                                            <i className="bi bi-pen text-warning" data-bs-toggle="tooltip" title="Edit"></i>
                                        </a>
                                        <a href="#" className="delete cursor-pointer p-2" data-bs-toggle="modal" data-bs-target="#deleteEmployeeModal" onClick={() => handleSupressionClick(note.id)}>
                                            <i className="bi bi-trash3 text-danger" data-bs-toggle="tooltip" title="delete"></i>
                                        </a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <SupreNote handleSupreNote={ handleSupreNote } />

            {changeNote && (
                <div id="editEmployeeModal" className="modal fade show" style={{ display: 'block' }}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <form>
                                <div className="modal-header justify-content-center align-items-center">
                                    <h4 className="modal-title">Modifier Note</h4>
                                    <button type="button" className="close m-5" onClick={() => setChangNote(null) } >&times;</button>
                                </div>
                                <div className="modal-body">
                                <div className="form-group">
                                        <label>Nom</label>
                                        <input type="text" name='id_etudiant_nom' value={changeNote.id_etudiant_nom} onChange={handleChangeValue} className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label>Prénom</label>
                                        <input type="text" name='id_cours_nom' value={changeNote.id_cours_nom} onChange={handleChangeValue} className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label>Note</label>
                                        <input type="text" name='note' className="form-control" required value={changeNote.note} onChange={handleChangeValue} />
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-default" onClick={() => setChangNote(null) } >Cancel</button>
                                        <button type="button" className="btn btn-primary " onClick={handleChangeSave} >Modifier</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default TableNote;
