import React from 'react';

// import { NavLink } from 'react-router-dom'

// image imports
import logo from '../images/logo.png';

// component imports
import LoginSignup from './LoginSignup'

const Header = () => {
    return (
        <header>
            <img src={logo} alt="hedliner website logo" />
            <nav>
                <a href='/'>Search</a>
                <a href='/'>Contact</a>
            </nav>
            <LoginSignup />
        </header>
    )
}

export default Header;

// const styles = {}