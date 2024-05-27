// import React from 'react'

function EditEtu() {
    return (
        <>
            <div id="editEmployeeModal" className="modal fade">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form >
                            <div className="modal-header">
                                <h4 className="modal-title">Modifier Etudiant</h4>
                                <button type="button" className="close" data-bs-dismiss="modal" aria-hidden="true">&times;</button>
                            </div>
                            <div className="modal-body">
                                <div className="form-group">
                                    <label>Nom</label>
                                    <input type="text" name='nom' className="form-control" required />
                                </div>
                                <div className="form-group">
                                    <label>Prenom </label>
                                    <input type="text" name='prenom' className="form-control" required />
                                </div>
                                <div className="form-group">
                                    <label>Date de Naissance</label>
                                    <input type="text" name='date_naissance' className="form-control" required />

                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="email" name='email' className="form-control" required />
                                </div>
                                <div className="form-group">
                                    <label>Adress</label>
                                    <input type="text" name='adress' className="form-control" required />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <input type="button" className="btn btn-default" data-bs-dismiss="modal" value="Cancel" />
                                <input type="submit" className="btn btn-primary" value="Update" data-bs-dismiss="modal" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>



        </>
    )
}

export default EditEtu