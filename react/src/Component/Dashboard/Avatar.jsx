

const Avatar = () => {
  return (
    <li className="nav-items dropdown pe-3">
      <a href="#" className="nav-link nav-profile d-flex align-item-center pe-0" data-bs-toggle='dropdown' >
        <img src="" alt="" />
        <span  className="d-none d-md-block dropdown-toggle ps-2">P. Advin </span>
      </a>
      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profil">
        <li className="dropdown-header">
          <h6>Advin</h6>
          <span>Developper Web</span>
        </li>
        <li>
          <hr className="dropdown-divider"/>
        </li>
        <li>
          <a href="#" className="dropdown-item d-flex align-items-center" >
            <i className="bi bi-person"></i>
            <span>Mon profil</span>
          </a>
        </li>
        <li>
          <hr className="dropdown-divider"/>
        </li>
        <li>
          <a href="#" className="dropdown-item d-flex align-items-center" >
            <i className="bi bi-gear"></i>
            <span>Parametre de compt</span>
          </a>
        </li>
        <li>
          <hr className="dropdown-divider"/>
        </li>
        <li>
          <a href="#" className="dropdown-item d-flex align-items-center" >
            <i className="bi bi-question-circle"></i>
            <span>Aide</span>
          </a>
        </li>
        <li>
          <hr className="dropdown-divider"/>
        </li>
        <li>
          <a href="#" className="dropdown-item d-flex align-items-center" >
            <i className="bi bi-box-arrow-right"></i>
            <span>Quitter</span>
          </a>
        </li>
      </ul>

    </li>
  )
}

export default Avatar