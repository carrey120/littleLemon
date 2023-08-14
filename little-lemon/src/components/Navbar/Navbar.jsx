import React from 'react'
import { images } from '../../contants';
import "./Navbar.scss"

const Navbar = () => {
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        {['HOME', 'ABOUT', 'MENU', 'RESERVATIONS', 'ORDER OUTLINE','LOGIN'].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar