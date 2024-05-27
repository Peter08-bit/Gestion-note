// import React from 'react'

import axios from "axios";
import { useEffect, useState } from "react";
import SupreEtu from "./SupreEtu";

const TableEtu = () => {
    const [student, setStudent] = useState([]);
    const [changeEtu, setChangeEtu] = useState(null);
    const [deleteEtu, setDeleteEtu] = useState(null);

    useEffect(() =>{
        fetchEtu();
    }, []);

    const fetchEtu = async () =>{
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

    const handleEtuClick = (etudiant) =>{
        setChangeEtu(etudiant);
    };
    
    const handleChangeInput = (e) => {
        setChangeEtu({
            ...changeEtu,
            [e.target.name] : e.target.value
        });
    };

    const handleModifier= async () =>{
        try {
            const response = await axios.put(`http://localhost:8097/Edit_etudiant/${changeEtu.id_etudant}`, changeEtu);
            console.log(response.data);
            setChangeEtu(null);
            fetchEtu();
        } catch (error) {
            console.error('Erreur lors de la mise à jour de l\'etudiant:', error);            
        }
    };

    //Delete
    const handleDeleteEtu = (id_etudant) =>{
        setDeleteEtu(id_etudant);
    };
    
    
    const handleEtu = async () =>{
        try {
            await axios.delete(`http://localhost:8097/Delete_etudiant/${deleteEtu}`);
            setDeleteEtu(null);
            fetchEtu();
        } catch (error) {
            console.error('Erreur lors de la suppression de l\'etudiant:', error);
        }
    };



    return (
        <>
            <div className="container">
                <div className="table-wrapper">
                    <div className="table-title">
                        <div className="row">
                            <div className="col-sm-6">
                                <h3>Liste des <b className='text-primary' > Etudiants</b></h3>
                            </div>
                            <div className="col-sm-6">
                                <a href="#" className='btn btn-outline-success border' data-bs-toggle="modal" data-bs-target="#addEmployeeModal">
                                    <i className="bi bi-plus-circle"></i>
                                    <span>Ajout Etudiant</span>
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
                            <th>Date Naissance</th>
                            <th>Email</th>
                            <th>Adress</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {student.map (etudiant =>(
                            <tr key={etudiant.id_etudant}>
                                <td>{etudiant.nom}</td>
                                <td>{etudiant.prenom}</td>
                                <td>{etudiant.date_naissance}</td>
                                <td>{etudiant.email}</td>
                                <td>{etudiant.adress}</td>
                                <td className="m-5">
                                
                                    <a href="#" className='edit cursor-pointer text-success p-3' data-bs-toggle="modal" data-bs-target="#editEmployeeModal" onClick={() => handleEtuClick(etudiant)}>
                                        <i className="bi bi-pen" data-bs-toggle="tooltip" title="Edit"></i>
                                    </a>
                                    {/* <button type="button" className='edit cursor-pointer text-success p-2' ><i className="bi bi-pen" ></i></button> */}
                                    {/* <Delete  /> */}
                                    <a href="#" className="delete cursor-pointer p-2" data-bs-toggle="modal" data-bs-target="#deleteEmployeeModal" onClick={() => handleDeleteEtu(etudiant.id_etudant)} >
                                            <i className="bi bi-trash3 text-danger" data-bs-toggle="tooltip" title="delete" ></i>
                                    </a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <SupreEtu handleEtu={ handleEtu}/>

            {changeEtu && (
                <div id="editEmployeeModal" className="modal fade show" style={{ display: 'block' }}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <form>
                                <div className="modal-header justify-content-center align-items-center">
                                    <h4 className="modal-title">Modifier Etudiant</h4>  
                                </div>
                                <div className="modal-body">
                                    <div className="form-group">
                                        <label>Nom</label>
                                        <input type="text" name='nom' value={changeEtu.nom} onChange={handleChangeInput} className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label>Prenom</label>
                                        <input type="text" name='prenom' value={changeEtu.prenom} onChange={handleChangeInput} className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label>Date de Naissance</label>
                                        <input type="text" name='date_naissance'  value={changeEtu.date_naissance} onChange={handleChangeInput} className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input type="text" name='email'  value={changeEtu.email} onChange={handleChangeInput} className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label>Adress</label>
                                        <input type="text" name='adress' value={changeEtu.adress} onChange={handleChangeInput} className="form-control" />
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-default" onClick={() => setChangeEtu(null)} >Cancel</button>
                                    <button type="button" className="btn btn-primary " onClick={handleModifier}>Modifier</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div> 
            )}
        </>
    );
}

export default TableEtu

