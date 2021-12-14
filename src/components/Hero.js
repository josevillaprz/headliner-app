import React from 'react';

import HeroImg from '../images/hero.jpg'
import Search from './Search'

const Hero = (props) => {
    return (
        <div style={styles.container}>
            <h1>Find Your next big music event.</h1>
            <p>Discover amazing events near you.</p>
            <Search event={props.event}/>
        </div>
    )
}

export default Hero;

const styles = {
    container: {
        height: '540px',
        maxWidth: '90%',
        margin: '0 auto',
        borderRadius: '20px',
        backgroundImage: `url(${ HeroImg })`,
        backgroundSize: 'cover',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    }
}