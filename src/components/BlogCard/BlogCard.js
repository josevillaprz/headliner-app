import styles from "./BlogCard.module.css";

const BlogCard = ({ post }) => {
  return (
    <li className={styles.container}>
      <div className={styles.imgContainer}>
        <img src={post.img} alt="placeholder" className={styles.img} />
      </div>
      <div className={styles.detailsContainer}>
        <h2>{post.title}</h2>
        <p>{post.description}</p>
      </div>
    </li>
  );
};

export default BlogCard;
