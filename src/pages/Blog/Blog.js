import React from "react";

// COMPONENTS
import BlogList from "../../components/BlogList/BlogList";
import Hero from "../../components/Hero/Hero";

// STYLING
import styles from "./Blog.module.css";

// IMAGES
import BlogImg from "../../images/blog-hero.jpg";
import blog1 from "../../images/blog1.jpg";
import blog2 from "../../images/blog2.jpg";
import blog3 from "../../images/blog3.jpg";

// static blog post data for testing
const Blog = () => {
  const posts = [
    {
      title: "The Best Bands of 2021",
      description: "Check out who made the biggest impact this year",
      img: blog1,
    },
    {
      title: "Staff Picks: Gigs of 2021",
      description: "See our picks for the best shows of 2021",
      img: blog2,
    },
    {
      title: "2021 Highlights",
      description: "Check out our yearly highlight replays",
      img: blog3,
    },
  ];

  return (
    <div className={styles.container}>
      <Hero image={BlogImg} title="Blog" subhead="Join the conversation." />
      <BlogList posts={posts} />
    </div>
  );
};

export default Blog;
