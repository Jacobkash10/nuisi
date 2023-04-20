import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
import Logo from '../../assets/images/LogoNuisible.png'

const Navbar = () => {
    const [navbar, setNavbar] = useState(false)

    const toggleNav = () => {
        setNavbar((prevState) => !prevState)
    }
    return (
        <nav>
            <div className='nav__logo'>
                <img src={Logo} alt="Logo" />
            </div>
            <div className='nav__menu'>
                <i class='bx bx-menu' onClick={toggleNav} ></i>
            </div>
            <div className='nav__links'>
                <ul className={navbar ? "ul__links ul__links__open" : "ul__links"}>
                    <i class='bx bxs-x-circle close' onClick={toggleNav} ></i>
                    <Link to='/' onClick={toggleNav}><li>Accueil</li></Link>
                    <Link to='/' onClick={toggleNav}><li>Services<i class='bx bxs-down-arrow-circle'></i></li></Link>
                    <Link to='/' onClick={toggleNav}><li>Zone de services<i class='bx bxs-down-arrow-circle'></i></li></Link>
                    <Link to='/' onClick={toggleNav}><li>A propos</li></Link>
                    <Link to='/' onClick={toggleNav}><li>Contact<i class='bx bxs-down-arrow-circle'></i></li></Link>
                    <Link to='/' onClick={toggleNav}><li className='login'>Connexion</li></Link>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
