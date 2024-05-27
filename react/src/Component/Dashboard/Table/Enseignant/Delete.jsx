// import React from 'react'

function Delete({ handleDeleteConfirm}) {
    return (
        <>
            <div id="deleteEmployeeModal" className="modal fade" tabIndex="-1">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title text-danger">Confirmer la suppression</h4>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <p>Êtes-vous sûr de vouloir supprimer cet enseignant ?</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default" data-bs-dismiss="modal">Annuler</button>
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={handleDeleteConfirm}>Supprimer</button>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Delete