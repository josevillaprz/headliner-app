import React from 'react';

const Button = (props) => {
    return (
        <a href={props.url} style={styles.button}>
            {props.btnText}
        </a>
    );
}

export default Button;

const styles = {
    button: {
        backgroundColor: '#4fed96',
        padding: '10px 20px',
        borderRadius: '5px',
        textDecoration: 'none',
        font: '700 16px lato',
        color: '#1f2b45',
        margin: '15px'
    }
}