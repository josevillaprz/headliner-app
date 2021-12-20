import React, { useState, useEffect } from 'react';
import BlogPost from '../components/BlogPost';

import BlogImg from '../images/blog-hero.jpg';
import blog1 from '../images/blog1.jpg'
import blog2 from '../images/blog2.jpg'
import blog3 from '../images/blog3.jpg'

const Blog = () => {

    const [blogPosts, setBlogPosts] = useState(null)

    useEffect(() =>{
        // hardcoded blog posts for this example
        const posts = [
            { title: 'The Best Bands of 2021', description: 'Check out who made the biggest impact this year', img: {blog1}},
            { title: 'Staff Picks: Gigs of 2021', description: 'See our picks for the best shows of 2021', img: {blog2}},
            { title: '2021 Highlights', description: 'Check out our yearly highlight replays', img: {blog3}}
        ]
        setBlogPosts(posts)
    }, [])

    return(
        <div>
            <div style={styles.heroContainer}>
                <h1 style={styles.h1}>Blog</h1>
                <p style={styles.subheading}>Join the conversation.</p>
            </div>
            <ul style={styles.blogList}>
                {blogPosts !== null && blogPosts.map(blogPost => (
                    <BlogPost title={blogPost.title} description={blogPost.description} src={blogPost.img}/>
                ))}
            </ul>
        </div>
    )
}

export default Blog;

const styles = {
    heroContainer: {
        backgroundImage: `url(${BlogImg})`,
        height: '540px',
        maxWidth: '90%',
        margin: '0 auto',
        borderRadius: '20px',
        backgroundSize: 'cover',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },

    h1: {
        font: '900 60px lato',
        color: '#fff',
        marginBottom: '0'
    },

    subheading: {
        font: '400 30px lato',
        color: '#fff',   
    },

    blogList: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '0 120px',
        marginTop: '100px'
    }
}