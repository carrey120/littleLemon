import React from 'react'
import { images } from '../../contants';
import "./Navbar.scss"
import { BrowserRouter as Link} from 'react-router-dom'


const Navbar = () => {
  return (
    <nav className='app__navbar'>
        <div className="app__navbar-logo">
          <img src={images.logo} alt="logo" />
        </div>
        <nav className='app__navbar-links'>
          <Link to="/">HOME</Link>
          <Link to="About">ABOUT</Link>
          <Link to="Menu">MENU</Link>
          <Link to="Reservations">RESERVATIONS</Link>
          <Link to="Order">ORDER OUTLINE</Link>
          <Link to="Login">LOGIN</Link>
        </nav>
  </nav>


  )
}

export default Navbar