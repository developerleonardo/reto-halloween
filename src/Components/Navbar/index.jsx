import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <ul>
                <li>
                    <img src="" alt="" />
                    BestiarioHalloween
                </li>
            </ul>
            <ul>
                <li className='navbar__contact'>
                    <a href="https://www.linkedin.com/in/leonardo-salazar-serna/">Contacto</a>
                </li>
            </ul>
        </nav>
    )
}

export { Navbar }