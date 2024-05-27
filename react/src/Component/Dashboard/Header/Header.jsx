// import Logo from './Logo'
import Logo from './Logo'
import Nav from './Nav'
import Search from './Search'
import './header.css'
import '../Side'

const Header = () => {
  return (
    <header id='header' className='header fixed-top d-flex align-items-center'>
        {/* logo */}
        <Logo/>
        {/* shearchbar */}
        <Search/>
        {/* nav */}
        <Nav/>
    </header>
  )
}

export default Header