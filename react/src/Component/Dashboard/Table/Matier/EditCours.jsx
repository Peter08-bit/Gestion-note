// import React from 'react'

function EditCours() {
  return (
    <>
    <div id="editEmployeeModal" className="modal fade">
        <div className="modal-dialog">
            <div className="modal-content">
                <form >
                    <div className="modal-header">
                        <h4 className="modal-title">Modifier Cours</h4>
                        <button type="button" className="close" data-bs-dismiss="modal" aria-hidden="true">&times;</button>
                    </div>
                    <div className="modal-body">
                        <div className="form-group">
                            <label>Nom cours</label>
                            <input type="text"  name='nom_cours'  className="form-control" required />
                        </div>
                        <div className="form-group">
                            <label>Code </label>
                            <input type="text"  name='code'  className="form-control" required />
                        </div>
                        <div className="form-group">
                            <label>Description</label>
                            <input type="text"  name='description'  className="form-control" required />

                        </div>
                        <div className="form-group">
                            <label>Credit</label>
                            <input type="number"  name='credit'  className="form-control" required />
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

export default EditCours