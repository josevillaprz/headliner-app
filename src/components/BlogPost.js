import React from 'react';

const BlogPost = (props) => {
    return (
        <li style={styles.li}>
            <img src={props.src} alt='blog section hero'/>
            <div style={styles.details}>
                <p style={styles.title}>{props.title}</p>
                <p style={styles.description}>{props.description}</p>
            </div>
        </li>
    );
}

export default BlogPost;

const styles = {
    li: {
        width: '336px',
        backgroundColor: '#F7F7F7',
        borderRadius: '20px',
        boxShadow: 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px',
        margin: '20px',
        listStyleType: 'none',
    },

    title: {
        font: '900 18px lato',
        color: '#1F2B45',
    },

    description: {
        font: '400 16px lato',
        color: '#636B7D'
    },

    details: {
        padding: '20px',
    }
}