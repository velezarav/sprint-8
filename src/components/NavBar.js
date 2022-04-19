import React from 'react'
import '../fonts/DIN-Next-W01/DIN-Next-W01-Bold.otf'

const NavBar = () => {

    return(
        <nav className='NavBar'>
            <div className='NavBar-up'>
                 <div className='login'>
                <a href='#'>LOG IN</a>
                <p>//</p>
                <a href='#'>SIGN UP</a>
                </div>
            </div>
            <ul className='NavBar-down'>
                <li ><a href='#'>HOME</a></li>
                <li ><a href='#'>SPACESHIPS</a></li>
            </ul>


        </nav>
    )
};

export default NavBar;