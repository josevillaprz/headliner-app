import React from 'react';

const Search = (props) => {
    return(
        <form style={styles.container} onSubmit={props.event}>
            <input style={styles.input} type="search" placeholder="Search for artists, venues, and events"/>
            <button style={styles.button} type="submit" >Search</button>
        </form>
    )
}

export default Search;

const styles = {
    container: {
        display: 'inline-block',
        backgroundColor: 'white',
        padding: '5px 5px 5px 20px',
        borderRadius: '50px',
        boxShadow: 'inset 0px 5px 8px 3px #C3C3C3',
        border: '1px solid #fff',
    },

    button: {
        height: '40px',
        padding: '0 20px',
        borderRadius: '50px',
        border: 'none',
        backgroundColor: '#4fed96',
        fontSize: '16px'
    },

    input: {
        width: '400px',
        height: '40px',
        outline: 'none',
        border: 'none',
        backgroundColor: 'transparent',
        fontSize: '16px'
    }

}