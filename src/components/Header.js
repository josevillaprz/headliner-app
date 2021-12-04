import React from 'react';

import { NavLink } from 'react-router-dom'

// image imports
import logo from '../images/logo.png';

// component imports
import LoginSignup from './LoginSignup'

const Header = () => {
    return (
        <header>
            <img src={logo} alt="hedliner website logo" />
            <nav>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='Contact'>Contact</NavLink>
            </nav>
            <LoginSignup />
        </header>
    )
}

export default Header;

// const styles = {}