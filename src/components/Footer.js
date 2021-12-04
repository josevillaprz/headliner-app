import React from 'react';

import { NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <footer>
            <NavLink to='/'><img src={logo} alt="hedliner website logo" style={styles.logo}/></NavLink>
            <nav>
                <NavLink to='/' style={styles.navlink}>Home</NavLink>
                <NavLink to='Contact' style={styles.navlink}>Contact</NavLink>
            </nav>
        </footer>
    );
};

export default Footer;