

const Message = () => {
  return (
    <li className="nav-item dropdown">
      <a href="#" className="nav-link nav-icon" data-bs-toggle='dropdown'>
        <i className="bi bi-chat-left-text"></i>
        <span className="badge bg-success badge-number ">3</span>
      </a>
      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow message">
        <li className="dropdown-header">
          You have 3 message
          <a href="#">
            <span className="badge rounded-pill bg-primary p-2 ms-2">
              view all
            </span>
          </a>
        </li>
        <li>
          <hr className='dropdow-divider'/>
        </li>
        <li className="message-item">
          <a href="#">
            <img src="" alt="" className="rounded-circle" />
          </a>
          <div>
            <h4> Amanda Jener</h4>
            <p>Zaho lye Peter tsy afaky fa tsobo wiffy portable-ko iny...</p>
            <p>3jr</p>
          </div>
        </li>
        <li>
          <hr className='dropdow-divider'/>
        </li>
        <li className="message-item">
          <a href="#">
            <img src="" alt="" className="rounded-circle" />
          </a>
          <div>
            <h4> Peter Advin</h4>
            <p>Ka zao moa cherie nanao kory naha tsobo azy io</p>
            <p>3jr</p>
          </div>
        </li>
        <li>
          <hr className='dropdow-divider'/>
        </li>
        <li className="message-item">
          <a href="#">
            <img src="" alt="" className="rounded-circle" />
          </a>
          <div>
            <h4> Amanda Jener</h4>
            <p>Je ne sais pas lye naiky</p>
            <p>3jr</p>
          </div>
        </li>
        <li>
          <hr className='dropdow-divider'/>
        </li>
        <li className="dropdown-footer">
          <a href="#"> Affcher plus de message </a>
        </li>
      </ul>
    </li>
  )
}

export default Message