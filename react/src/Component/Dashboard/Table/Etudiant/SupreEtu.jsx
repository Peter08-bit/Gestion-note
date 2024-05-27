// import React from 'react'


function SupreEtu({ handleEtu }) {

  return (
    <>
            <div id="deleteEmployeeModal" className="modal fade">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form>
                            <div className="modal-header bolder justify-content-center align-items-center">
                                <h4 className="modal-title  text-danger "> <i className="bi bi-trash3"></i> </h4>
                                {/* <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button> */}
                            </div>
                            <div className="modal-body">
                                <p>Are you sure you want to delete these Records ?</p>
                                <p className="text-warning"><small>This action cannot be undone.</small></p>
                            </div>
                            <div className="modal-footer">
                            <button type="button" className="btn btn-default" data-bs-dismiss="modal">Annuler</button>  
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={ handleEtu } >Supprimer</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>


        </>
  )
}

export default SupreEtu