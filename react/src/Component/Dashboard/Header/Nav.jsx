
import Avatar from '../Avatar'
import Message from './Message'
import Notice from './Notice'
import './nav.css'

const Nav = () => {
  return (
    <nav className='header-nav ms-auto'>
        <ul className='d-flex align-items-center'>
            <Notice/>
            <Message/>
            <Avatar/>
        </ul>
    </nav>
  )
}

export default Nav