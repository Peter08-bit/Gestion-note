// import React from 'react'

function SupreNote({ handleSupreNote }) {
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
                        <p>Vous etes sûr de suprimer ce note?</p>
                        <p className="text-warning"><small>Si oui ce note va se suprime definitivement.</small></p>
                    </div>
                    <div className="modal-footer">
                        <input type="button" className="btn btn-default" data-bs-dismiss="modal" value="Cancel" />
                        <input type="button" className="btn btn-danger" value="Delete" data-bs-dismiss="modal" onClick={handleSupreNote} />
                    </div>
                </form>
            </div>
        </div>
    </div>


</>
  )
}

export default SupreNote