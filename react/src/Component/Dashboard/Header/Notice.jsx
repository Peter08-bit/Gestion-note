

const Notice = () => {
    return (
        <li className="nav-item dropdown">
            <a href="#" className="nav-link nav-icon" data-bs-toggle="dropdown">
                <i className="bi bi-bell"></i>
                <span className="badge bg-primary badge-number">4</span>
            </a>
            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notification ">
                <li className="dropdown-header">
                    You have 4 new notification
                    <a href="#">
                        <span className="badge rounded-pill bg-primary p-2 ms-2">
                            view all
                        </span>
                    </a>
                </li>
                <li>
                    <hr className="dropdown-divider" />
                </li>
                <li className="notification-item">
                    <i className="bi bi-exclamation-circle text-warning"></i> {/* Correction de la classe ici */}
                    <div>
                        <h4>lorem is Ipsum</h4>
                        <p>Voici votre message</p>
                        <p>30 min</p>
                    </div>
                </li>
                <li>
                    <hr className="dropdown-divider" />
                </li>
                <li className="notification-item">
                    <i className="bi bi-exclamation-circle text-warning"></i> {/* Correction de la classe ici */}
                    <div>
                        <h4>lorem is Ipsum</h4>
                        <p>Voici votre message</p>
                        <p>30 min</p>
                    </div>
                </li>
                <li>
                    <hr className="dropdown-divider" />
                </li>
                <li className="notification-item">
                    <i className="bi bi-exclamation-circle text-warning"></i> {/* Correction de la classe ici */}
                    <div>
                        <h4>lorem is Ipsum</h4>
                        <p>Voici votre message</p>
                        <p>30 min</p>
                    </div>
                </li>
                <li>
                    <hr className="dropdown-divider" />
                </li>
                <li className="dropdown-footer">
                    <a href="#">Afficher toutes les notifications</a> {/* Correction de la faute de frappe ici */}
                </li>
            </ul>
        </li>
    );
}

export default Notice;
