import './Header.css'
import { Link } from 'react-router-dom'
import logo from '/code.png' // agar public/ da bo'lmasa

function Header() {
  return (
    <header className='home'>
      <div className="headerLogo">
        <img className="logo" src={logo} alt="logo" />
        <div className='title-container'>
          <h1>Sherzod</h1>
          <p>web</p>
        </div>
      </div>
      <nav className='navbar'>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/goals'>Goals</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
