import React from 'react'
import '../fonts/DIN-Next-W01/DIN-Next-W01-Bold.otf'
import { Link } from 'react-router-dom';

const NavBar = () => {

  return (
    <nav className='NavBar'>
      <div className='NavBar-up'>
        <div className='login'>
        <Link to="/home">LOGIN AREA</Link>

        </div>
      </div>
      <ul className='NavBar-down'>
        <li ><Link to="/home">HOME</Link></li>
        <li ><Link to="/spaceship-list">SPACESHIPS</Link></li>
      </ul>


    </nav>
  )
};

export default NavBar;