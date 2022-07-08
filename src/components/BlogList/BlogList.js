import BlogCard from "../BlogCard/BlogCard";
import styles from "./BlogList.module.css";

const BlogList = ({ posts }) => {
  return (
    <ul className={styles.container}>
      {posts.map((post, i) => (
        <BlogCard post={post} key={i} />
      ))}
    </ul>
  );
};

export default BlogList;
