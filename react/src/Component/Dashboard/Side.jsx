import navList from './DATA/Navitem'
import './side.css';

import { Link } from 'react-router-dom';

const Side = () => {
    // const navList =
    return (
        <aside id='sidebar' className='sidebar'>
            <ul className="sidebar-nav" id='sidebar-nav'>
                <li className="nav-item">
                    <a href="/" className="nav-link">
                        <i className="bi bi-grid"></i>
                        <span>Dashbord</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link collapsed" data-bs-toggle="collapse" data-bs-target="#components-nav">
                        <i className="bi bi-menu-button-wide"></i>
                        <span>Document</span>
                        <i className="bi bi-chevron-down ms-auto"></i>
                    </a>
                    <ul className="nav-content collapse" id='components-nav' data-bs-parent='#sidebar-nav'>
                        <li className='nav-link'>
                            <a href="">
                                <i className="bi bi-circle"></i>
                                <span>Niveau L1</span>
                            </a>
                        </li>
                        <li className='nav-link'>
                            <a href="">
                                <i className="bi bi-circle"></i>
                                <span>Niveau L2</span>
                            </a>
                        </li>
                        <li className='nav-link'>
                            <a href="">
                                <i className="bi bi-circle"></i>
                                <span>Niveau L3</span>
                            </a>
                        </li>
                        <li className='nav-link'>
                            <a href="">
                                <i className="bi bi-circle"></i>
                                <span>Niveau M1</span>
                            </a>
                        </li>
                    </ul>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link collapsed" data-bs-toggle="collapse" data-bs-target="#tables-nav">
                        <i className="bi bi-layout-text-window-reverse"></i>
                        <span>Table</span>
                        <i className="bi bi-chevron-down ms-auto"></i>
                    </a>
                    <ul className="nav-content collapse" id='tables-nav' data-bs-parent='#sidebar-nav'>
                        <li className='nav-link'> 
                        <Link to="/dashboard/table">
                        <i className="bi bi-circle"></i>
                                    <span>Enseignant</span>
                        </Link>
                            {/* <a href="/Table/Enseignant/Enseignant.jsx">

                            </a> */}
                               
                        </li>
                        <li className='nav-link'>
                        <Link to="/dashboard/etudiant">
                        <i className="bi bi-circle"></i>
                                    <span>Etudiant</span>
                        </Link>
                        </li>
                        <li className='nav-link'>
                        <Link to="/dashboard/cours">
                        <i className="bi bi-circle"></i>
                                    <span>Cours</span>
                        </Link>
                        </li>
                        <li className='nav-link'>
                        <Link to="/dashboard/note">
                        <i className="bi bi-circle"></i>
                                    <span>Note</span>
                        </Link>
                        </li>
                        <li className='nav-link'>
                            <a href="">
                                <i className="bi bi-circle"></i>
                                <span>Semestre</span>
                            </a>
                        </li>
                    </ul>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link collapsed" data-bs-toggle="collapse" data-bs-target="#charts-nav">
                        <i className="bi bi-bar-chart"></i>
                        <span>Chart</span>
                        <i className="bi bi-chevron-down ms-auto"></i>
                    </a>
                    <ul className="nav-content collapse" id='charts-nav' data-bs-parent='#sidebar-nav'>
                        <li className='nav-link'>
                            <a href="./Table/Enseignant.jsx" >
                                <i className="bi bi-circle"></i>
                                <span>Enseignant</span>
                            </a>
                        </li>
                        <li className='nav-link'>
                            <a href="#">
                                <i className="bi bi-circle"></i>
                                <span>Etudiant</span>
                            </a>
                        </li>
                        <li className='nav-link'>
                            <a href="">
                                <i className="bi bi-circle"></i>
                                <span>Cours</span>
                            </a>
                        </li>
                        <li className='nav-link' >
                            <a href="">
                                <i className="bi bi-circle"></i>
                                <span>Note</span>
                            </a>
                        </li>
                        <li className='nav-link'>
                            <a href="#">
                                <i className="bi bi-circle"></i>
                                <span>Semestre</span>
                            </a>
                        </li>
                    </ul>
                </li>
                <li className='nav-heading'>Pages</li>
                {navList.map(nav => (
                    <li className='nav-item' key={nav.id}>
                        <a href="#" className='nav-link collapsed'>
                            <i className={nav.icon}></i>
                            <span> {nav.name} </span>
                        </a>
                    </li>
                ))}
            </ul>
        </aside>
    );
}

export default Side;
