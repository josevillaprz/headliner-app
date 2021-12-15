import React from 'react';

import { NavLink } from 'react-router-dom'

// image imports
import logo from '../images/logo.png';

const Header = () => {
    return (
        <header style={styles.header}>
            <NavLink to='/'><img src={logo} alt="hedliner website logo" style={styles.logo}/></NavLink>
            <nav>
                <NavLink to='/' style={styles.navlink}>Home</NavLink>
                <NavLink to='Contact' style={styles.navlink}>Contact</NavLink>
            </nav>
        </header>
    )
}

export default Header;

const styles = {
    header: {
        backgroundColor: '#F7F7F7',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: '100px',
        padding: '0 102px',
        justifyContent: 'space-between',
        marginBottom: '30px'
    },

    logo: {
        width: '140px'
    },

    navlink: {
        margin: '0 10px',
    }
}