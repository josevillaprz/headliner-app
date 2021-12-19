import React from 'react';

import HeroImg from '../images/hero.jpg'
import Search from './Search'

const Hero = (props) => {
    return (
        <div style={styles.container}>
            <h1 style={styles.h1}>Find your next big music event.</h1>
            <p style={styles.subheading}>Discover amazing events near you.</p>
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
    },

    h1: {
        font: '900 60px lato',
        color: '#1F2B45',
        marginBottom: '0'
    },

    subheading: {
        font: '400 30px lato',
        color: '#1F2B45',
        
    }
}